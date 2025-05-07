<template>
  <q-page class="q-pa-md">
    <q-page-container
      style="padding-top: 10px; padding-bottom: 37px; padding-left: 80px"
    >

  <q-card class="q-pa-md">
    <q-page-section>
      <div class="text-bold text-h6 col-12">List Of Application</div>
          <hr />
      <!-- <div class="text-bold text-h6 col-12">Senarai Saringan Pengambilan</div> -->
      <q-page class="q-pa-lg q-mt-md">
        <div class="row q-col-gutter-lg" id="test">
          <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <q-card
              no-shadow
              fit
              bordered
              class="cursor-pointer"
              :style="{
                backgroundColor: isClicked
                  ? '#68d8f7'
                  : isHovered
                  ? '#68d8f7'
                  : '#ffffff',
              }"
              :class="{ hovered: isHovered, clicked: isClicked }"
              @mouseover="isHovered = true"
              @mouseleave="isHovered = false"
              @click="handleClick"
            >
              <!-- :class="{ active: status == selectedStatus }"> -->
              <q-card-section vert class="q-pa-sm" role="">
                <q-item row no-wrap class="">
                  <q-item-section column justify-center class=""
                    ><q-item-label
                      ><span class="text-weight-medium title text-grey-8"
                        >Kelulusan Fakulti</span
                      ></q-item-label
                    >
                  </q-item-section>
                  <q-item-section side justify-center class=""
                    ><q-avatar
                      class="text-warning q-chip--colored q-ml-none"
                      style="
                        font-size: 45px;
                        background-color: rgb(231 247 253);
                      "
                    >
                      <a
                        ><span class="text-weight-medium title text-primary">
                          {{ bilLF }}</span
                        ></a
                      >
                    </q-avatar>
                  </q-item-section>
                </q-item>
              </q-card-section>
            </q-card>
          </div>

          <!-- <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <q-card
              no-shadow
              fit
              bordered
              class="cursor-pointer"
              @click="selectStatus('4')"
            >
              <q-card-section vert class="q-pa-sm" role="">
                <q-item row no-wrap class="">
                  <q-item-section column justify-center class=""
                    ><q-item-label
                      ><span class="text-weight-medium title text-grey-8"
                        >Permohonan Pindah Fakulti</span
                      ></q-item-label
                    >
                  </q-item-section>
                  <q-item-section side justify-center class=""
                    ><q-avatar
                      class="text-warning q-chip--colored q-ml-none"
                      style="
                        font-size: 45px;
                        background-color: rgb(255, 239, 226);
                        /* background-color: rgb(240, 225, 17); */
                      "
                    >
                      <span class="text-weight-medium title"> {{ bilPF }}</span>
                    </q-avatar>
                  </q-item-section>
                </q-item>
              </q-card-section>
            </q-card>
          </div> -->

          <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <q-card
              no-shadow
              fit
              bordered
              class="cursor-pointer"
              :style="{
                backgroundColor: isClicked1
                  ? '#22e08e'
                  : isHovered1
                  ? '#22e08e'
                  : '#ffffff',
              }"
              :class="{ hovered: isHovered1, clicked: isClicked1 }"
              @mouseover="isHovered1 = true"
              @mouseleave="isHovered1 = false"
              @click="handleClick1"
            >
              <q-card-section vert class="q-pa-sm" role="">
                <q-item row no-wrap class="">
                  <q-item-section column justify-center class=""
                    ><q-item-label
                      ><span class="text-weight-medium title text-grey-8"
                        >Permohonan Disahkan</span
                      ></q-item-label
                    >
                  </q-item-section>
                  <q-item-section side justify-center class=""
                    ><q-avatar
                      class="text-positive q-chip--colored q-ml-none"
                      style="
                        font-size: 45px;
                        background-color: rgb(225, 246, 232);
                      "
                    >
                      <span class="text-weight-medium title text-positive">
                        {{ bilLPPS }}</span
                      >
                    </q-avatar>
                  </q-item-section>
                </q-item>
              </q-card-section>
            </q-card>
          </div>

          <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <q-card
              no-shadow
              fit
              bordered
              :style="{
                backgroundColor: isClicked2
                  ? '#e66c5c'
                  : isHovered2
                  ? '#e66c5c'
                  : '#ffffff',
              }"
              :class="{ hovered: isHovered2, clicked: isClicked2 }"
              @mouseover="isHovered2 = true"
              @mouseleave="isHovered2 = false"
              @click="handleClick2"
            >
              <q-card-section vert class="q-pa-sm" role="">
                <q-item row no-wrap class="">
                  <q-item-section column justify-center class=""
                    ><q-item-label
                      ><span class="text-weight-medium title text-grey-8"
                        >Permohonan Tidak Disahkan</span
                      ></q-item-label
                    >
                  </q-item-section>
                  <q-item-section side justify-center class=""
                    ><q-avatar
                      class="text-negative q-chip--colored q-ml-none"
                      style="
                        font-size: 45px;
                        background-color: rgb(253, 228, 227);
                      "
                    >
                      <span class="text-weight-medium title text-negative">
                        {{ bilGF }}</span
                      >
                    </q-avatar>
                  </q-item-section>
                </q-item>
              </q-card-section>
            </q-card>
          </div>
          <!-- end 4 kotak -->
           <!-- carian by date -->
           <div class="row q-col-gutter-sm items-end">
              <div class="col-12 col-sm-4">
                <q-input
                  filled
                  outlined
                  dense
                  v-model="tempFrom"
                  label="yyyy/mm/dd"
                  style="margin: 0 12px"
                  mask="####-##-##"
                >
                  <template v-slot:prepend>
                    <q-icon name="event" class="cursor-pointer">
                      <q-popup-proxy
                        ref="fromPopup"
                        cover
                        transition-show="scale"
                        transition-hide="scale"
                      >
                        <q-date
                          v-model="tempFrom"
                          mask="YYYY-MM-DD"
                          @update:model-value="() => $refs.fromPopup.hide()"
                        >
                          <div class="row items-center justify-end">
                            <q-btn
                              v-close-popup
                              label="Close"
                              color="primary"
                              flat
                            />
                          </div>
                        </q-date>
                      </q-popup-proxy>
                    </q-icon>
                  </template>
                </q-input>
              </div>
              <div class="col-12 col-sm-4">
                <q-input
                  filled
                  outlined
                  dense
                  v-model="tempUntil"
                  label="yyyy/mm/dd"
                  style="margin: 0 12px"
                  mask="####-##-##"
                >
                  <template v-slot:prepend>
                    <q-icon name="event" class="cursor-pointer">
                      <q-popup-proxy
                        ref="untilPopup"
                        cover
                        transition-show="scale"
                        transition-hide="scale"
                      >
                        <q-date
                          v-model="tempUntil"
                          mask="YYYY-MM-DD"
                          @update:model-value="() => $refs.untilPopup.hide()"
                        >
                          <div class="row items-center justify-end">
                            <q-btn
                              v-close-popup
                              label="Close"
                              color="primary"
                              flat
                            />
                          </div>
                        </q-date>
                      </q-popup-proxy>
                    </q-icon>
                  </template>
                </q-input>
              </div>
              <!-- <div class="col-12 col-sm-4">
                <q-input filled v-model="tempFrom" label="" mask="####-##-##">
                  <template v-slot:append>
                    <q-icon name="event" class="cursor-pointer">
                      <q-popup-proxy
                        ref="fromPopup"
                        cover
                        transition-show="scale"
                        transition-hide="scale"
                      >
                        <q-date
                          v-model="tempFrom"
                          mask="YYYY-MM-DD"
                          @update:model-value="() => $refs.fromPopup.hide()"
                        >
                          <div class="row items-center justify-end">
                            <q-btn
                              v-close-popup
                              label="Close"
                              color="primary"
                              flat
                            />
                          </div>
                        </q-date>
                      </q-popup-proxy>
                    </q-icon>
                  </template>
                </q-input>
              </div>
              <div class="col-12 col-sm-4">
                <q-input filled v-model="tempUntil" label="" mask="####-##-##">
                  <template v-slot:append>
                    <q-icon name="event" class="cursor-pointer">
                      <q-popup-proxy
                        ref="untilPopup"
                        cover
                        transition-show="scale"
                        transition-hide="scale"
                      >
                        <q-date
                          v-model="tempUntil"
                          mask="YYYY-MM-DD"
                          @update:model-value="() => $refs.untilPopup.hide()"
                        >
                          <div class="row items-center justify-end">
                            <q-btn
                              v-close-popup
                              label="Close"
                              color="primary"
                              flat
                            />
                          </div>
                        </q-date>
                      </q-popup-proxy>
                    </q-icon>
                  </template>
                </q-input>
              </div> -->
              <div class="col-12 col-md-2 flex items-end">
                <q-btn
                  label="Search"
                  color="primary"
                  class="full-width"
                  style="font-size: 13px; padding: 8px 16px"
                  @click="applyDateFilter"
                />
              </div>
            </div>
           <!-- end date -->
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <q-table
              flat
              bordered
              no-wrap
              :rows="filteredRows"
              :columns="columns"
              row-key="p001nokp"
              :horizontal-separator="separator"
              style="padding: 2px; border: 1px solid lightgray"
              v-model:pagination.sync="pagination"
              :filter="filter"
              :options="options"
              ref="tableRef"
              @request="onRequest"
            >
            <template v-slot:body-cell-no="props">
                  <q-td align="justify">
                    {{
                      (pagination.page - 1) * pagination.rowsPerPage +
                      props.pageIndex +
                      1
                    }}
                  </q-td>
                </template>
              <!-- <template v-slot:top-left>
                <div class="">
                  <span style="font-size: medium; font-weight: bold"
                    >Senarai Permohonan</span
                  >
                  <hr />
                </div>
              </template> -->
              <template v-slot:body-cell-actions="props">
                <q-td align="center">
                  <q-btn
                    v-if="!isViewing && props.row.p001status !== '1'"
                    dense
                    flat
                    color="black"
                    icon="edit"
                    @click="goToDetailsAdmin(props.row.p001nokp)"
                  />
                  <q-btn v-if="props.row.p001status === '1'"
                    dense
                    flat
                    color="black"
                    icon="visibility"
                    @click="goToViewDetails(props.row.p001nokp)"
                  />
                  <!-- <q-btn dense flat icon="edit" color="primary" @click="goToEditDetails(props.row.p001nokp)" /> -->
                </q-td>
              </template>
              <template v-slot:top-right>
                <div class="row q-gutter-sm">
                  <q-input
                    outlined
                    dense
                    debounce="300"
                    v-model="filter"
                    placeholder="Search"
                    items-start
                    class=""
                  >
                    <template v-slot:append> <q-icon name="search" /> </template
                  ></q-input>
                  <q-col auto>
                    <q-btn flat round>
                      <img
                        src="src/assets/pdf.svg"
                        alt="PDF Icon"
                        class="pdf"
                        @click="downloadPDF()"
                      />
                      <q-tooltip class="bg-no-color" :offset="[5, 5]">
                        Export PDF
                      </q-tooltip>
                    </q-btn></q-col
                  >
                  <q-col auto>
                    <q-btn flat round>
                      <img
                        src="src/assets/Excel.png"
                        alt="Excel Icon"
                        class="excel"
                      />
                      <q-tooltip class="bg-no-color" :offset="[5, 5]">
                        Export Excel
                      </q-tooltip>
                    </q-btn>
                  </q-col>
                </div>
              </template>
              <template v-slot:body-cell-status="props">
                <q-chip
                  :color="statusColor(props.row.p001status)"
                  text-color="white"
                  dense
                  class="text-weight-bolder"
                  square
                  style="width: 100px; height: 100%"
                >
                  <!-- {{ props.row.p001status }} -->
                  {{ statusDescription(props.row.p001status) }}
                </q-chip>
              </template>
              <!-- <template v-slot:body-cell="props">
                <q-td
                  :props="props"
                  :style="{ textAlign: props.col.align || 'center' }"
                >
                  {{ props.row[props.col.field] }}
                </q-td>
              </template> -->
            </q-table>
          </div>
        </div>
        <!-- end 1st gutter -->
      </q-page>
    </q-page-section>
  </q-card>
</q-page-container>
</q-page>
</template>

<style>
/* .flex-center {
  align-items: center;
} */
hr {
  box-sizing: content-box;
  height: 0;
  overflow: visible;
}

.q-separator {
  border: 0;
  background: #0000001f;
  margin: 0;
  transition: background 0.3s, opacity 0.3s;
  flex-shrink: 0;
}

.q-separator--horizontal {
  display: block;
  height: 1px;
}

.q-field {
  font-size: 14px;
}

.q-pr-md {
  padding-right: 16px;
}

.shadow_custom {
  box-shadow: 0 2px 6px #2f2b3d !important;
}

.no-shadow {
  box-shadow: none !important;
}

.responsive-layout {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .responsive-layout {
    flex-direction: column;
  }

  .q-card-section {
    width: 100% !important;
    margin: 0 auto !important;
  }
}

.row > .col-md-12 {
  height: auto;
  width: 100%;
}

.q-pa-lg {
  padding: 24px;
}

.q-mt-md {
  margin-top: 16px;
}

.fit {
  width: 100% !important;
  height: 100% !important;
}

.q-card {
  box-shadow: 0 1px 5px #0003, 0 2px 2px #00000024, 0 3px 1px -2px #0000001f;
  border-radius: 4px;
  vertical-align: top;
  background: #fff;
  position: relative;
}

/* */
.q-pa-sm {
  padding: 8px;
}

.no-wrap {
  flex-wrap: nowrap;
}

.q-item {
  min-height: 48px;
  padding: 8px 16px;
  color: inherit;
  transition: color 0.3s, background-color 0.3s;
}

.q-item {
  position: relative;
}

.row,
.column,
.flex {
  display: flex;
  flex-wrap: wrap;
}

.justify-center {
  justify-content: center;
}

.column {
  flex-direction: column;
}

.text-primary {
  color: var(--q-primary) !important;
}

.q-avatar {
  position: relative;
  vertical-align: middle;
  display: inline-block;
  border-radius: 50%;
  font-size: 48px;
  height: 1em;
  width: 1em;
}

.text-grey-8 {
  color: #616161 !important;
}

.text-negative {
  color: var(--q-negative) !important;
}

.text-positive {
  color: var(--q-positive) !important;
}

.text-warning {
  /* color: var(--q-warning) !important; */
  color: rgb(243, 243, 241);
}

.text-primary {
  color: #5bb9e7 !important;
}

.full-width {
  width: 100% !important;
  margin-left: 0 !important;
  margin-right: 0 !important;
}

.excel {
  height: auto;
  max-width: 45px;
  max-height: 45px;
  object-fit: contain;
}

.pdf {
  height: auto;
  max-width: 25px;
  max-height: 25px;
  object-fit: contain;
}

.pdfRow {
  max-width: 20px;
  max-height: 15px;
  object-fit: contain;
}

/* q-card {
  transition: background-color 0.3s ease, transform 0.2s ease;
  background-color: #f8f9fa;
}
.q-card.hovered {
  background-color: var(--q-primary);
}
.q-card.clicked {
  background-color: var(--q-secondary);
  transform: scale(1.05);
} */
</style>
<script>
import { useRoute, useRouter } from "vue-router";
import { defineComponent, onMounted, ref, computed, reactive } from "vue";
import { useRetPermohonanStorePps } from "src/stores/getmohonpps";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import * as XLSX from "xlsx";

export default defineComponent({
  name: "PermohonanPagePPS",
  setup() {
    const storeGetMohon = useRetPermohonanStorePps(); // Pinia store

    // Computed property for reactive state
    const MohonList = computed(() => {
      const list = storeGetMohon.MohonList;
      //  console.log("MohonList:", MohonList.value);
      //  console.log("List:", list.value);

      if (Array.isArray(list)) {
        return list;
      } else if (list && typeof list === "object") {
        return Object.values(list); // Convert object to array
      } else {
        return []; // Default to empty array
      }
    });

    const tableRef = ref();
    const router = useRouter();
    const route = useRoute();
    const filter = ref("");
    const statB = ref("");
    const bilB = ref("");
    const bilD = ref("");
    const bilPF = ref("");
    const bilGF = ref("");
    const bilLF = ref("");
    const bilLPPS = ref("");
    const selectedStatus = ref("");
    const isHovered = ref(false);
    const isHovered1 = ref(false);
    const isHovered2 = ref(false);
    const isClicked = ref(false);
    const isClicked1 = ref(false);
    const isClicked2 = ref(false);
    const isViewing = ref(false);
    const namaprogram = ref("");
    const kodprogram = ref("");
    const necprogram = ref("");
    const program = ref("");

    const tempFrom = ref(""); // User input
    const tempUntil = ref("");

    const filterFrom = ref(""); // Actual value used in filter
    const filterUntil = ref("");

    const fromPopup = ref(null);
    const untilPopup = ref(null);

    const handleClick = () => {
      isClicked.value = true;
      isClicked.value = !isClicked.value;
      selectStatus(["2", "5"]);
    };

    const handleClick1 = () => {
      isClicked1.value = true;
      isClicked1.value = !isClicked1.value;
      selectStatus("1");
    };

    const handleClick2 = () => {
      isClicked2.value = true;
      isClicked2.value = !isClicked2.value;
      selectStatus(["3", "6"]);
    };

    // Filters rows based on selected status
    // const filteredRows = computed(() => {
    //   if (selectedStatus.value.length === 0) {
    //     return MohonList.value; // Return all if no filter is applied
    //   }

    //   return MohonList.value.filter((row) =>
    //     selectedStatus.value.includes(row.p001status)
    //   );
    // });

    const filteredRows = computed(() => {
      const list = MohonList.value || [];
      const from = tempFrom.value;
      const until = tempUntil.value;
      const selected = selectedStatus.value;

      return list.filter((row) => {
        const statusMatch =
          selected.length === 0 || selected.includes(row.p001status);

        const dateVal = row.p001tkhpohon;
        const fromMatch = !from || dateVal >= from;
        const untilMatch = !until || dateVal <= until;
        const dateMatch = fromMatch && untilMatch;

        // Allow separate or combined filters
        return statusMatch && dateMatch;
      });
    });

    const applyDateFilter = () => {
      console.log("Search button clicked");
      filterFrom.value = tempFrom.value || "";
      filterUntil.value = tempUntil.value || "";
      console.log("tempFrom:", tempFrom.value);
      console.log("tempUntil:", tempUntil.value);
    };

    const selectStatus = (status) => {
      if (Array.isArray(status)) {
        selectedStatus.value = status;
        console.log("Filtering for multiple statuses:", status);
      } else {
        selectedStatus.value = [status];
        console.log("Filtering for single status:", status);
      }
    };

    const statusColor = (status) => {
      const colors = {
        1: "green",
        2: "green",
        3: "red",
        4: "yellow",
        5: "green",
        6: "red",
        0: "blue",
        "": "grey",
      };
      return colors[status] || "grey"; // Default to grey if status is unknown
    };

    const statusDescription = (status) => {
      // console.log('Status:', status); // Debugging
      const descriptions = {
        1: "Approved(PPS)",
        2: "Approved(Faculty1)",
        3: "Rejected (Faculty1)",
        4: "Transfer Faculty",
        5: "Approved(Faculty2)",
        6: "Rejected (Faculty2)",
        0: "New",
        "": "Draft",
      };
      return descriptions[status] || "Draft";
    };

    const downloadPDF = () => {
      const doc = new jsPDF();

      // Save PDF name as Report
      doc.setFontSize(12);
      doc.text("REPORT", 105, 12, { align: "center" });

      // Prepare table data
      const tableColumn = [
        "INDEX",
        "NAME",
        "NOKP/PASSPORT",
        "DATE APPLY",
        "PROGRAMME",
        "STATUS",
      ];
      const tableRows = filteredRows.value.map((row, index) => [
        index + 1,
        row.p001nama,
        row.p001nokp,
        row.p001tkhpohon,
        getProgramName(row.p001kprog),
        statusDescription(row.p001status),
      ]);

      // Apply border and styling to match the table header
      doc.autoTable({
        head: [tableColumn],
        body: tableRows,
        startY: 20, // Vertical start position
        theme: "grid",
        headStyles: {
          fillColor: [255, 255, 255], // Header background color
          textColor: [0, 0, 0], // Header text color
          lineWidth: 0.1, // Border thickness for header
          lineColor: [0, 0, 0], // Border color for header
          halign: "center", // Horizontal alignment for header
        },
        styles: {
          fontSize: 10, // Font size for table content
          lineColor: [0, 0, 0], // Line color for table content
          lineWidth: 0.1, // Line width for table content
        },
        tableLineColor: [0, 0, 0], // Global table line color
        tableLineWidth: 0.1, // Global table line width
        columnStyles: {
          0: { halign: "center" }, // Center align the INDEX column
        },
      });

      // Save the PDF
      doc.save("List Of Application.pdf");
    };

    // Fetch data on component mount
    onMounted(() => {
      onLoad();
    });

    // Load data from the store
    async function onLoad() {
      try {
        // Fetch data for MohonList
        await storeGetMohon.fetchP();
        applyDateFilter();
        // Fetch data for bilstat
        await storeGetMohon.fetchbilstat();
        bilB.value = storeGetMohon.Countbystat.bildraf || "";
        bilD.value = storeGetMohon.Countbystat.bildraf1 || "";
        bilPF.value = storeGetMohon.Countbystat.bilpindahf || "";
        bilGF.value = storeGetMohon.Countbystat.bilgagalf || "";
        bilLF.value = storeGetMohon.Countbystat.billulusf || "";
        bilLPPS.value = storeGetMohon.Countbystat.billuluspps || "";
        //console.log("Bilstat fetched successfully:", bilB.value);
         // Fetch data for kodprogram
         await storeGetMohon.fetchKodProgram();
        namaprogram.value = storeGetMohon.KodProgram[0].p020namaprogbi || "";
        kodprogram.value = storeGetMohon.KodProgram[0].p020kprog || "";
        necprogram.value = storeGetMohon.KodProgram[0].z054bnecdetail || "";

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    const Total = (type) => {
      console.log("Total:", type);
    };

    const goToDetailsAdmin = (p001nokp) => {
      // router.push({ name: "DetailsPermohonanAdmin", params: { p001nokp } });
      // this.isViewing = false;
      router.push({
        name: "DetailsPermohonanAdmin",
        params: { p001nokp },
        state: { isViewing: false },
        // query: { isViewing: "false" }, // Pass as a query param
      });
    };

    const goToViewDetails = (p001nokp) => {
      // router.push({ name: "DetailsPermohonanAdmin", params: { p001nokp } });
      // this.isViewing = true;
      router.push({
        name: "DetailsPermohonanAdmin",
        params: { p001nokp },
        state: { isViewing: true },
        // query: { isViewing: "true" }, // Pass as a query param
      });
    };

    const goToEditDetailsAdmin = (p001nokp) => {
      router.push({ name: "EditPermohonanAdmin", params: { p001nokp } });
    };

    const onRequest = (props) => {
      // Handle request for pagination and sorting here if necessary
      console.log("Request:", props);
    };

    const getProgramName = (kprog) => {
    const program = storeGetMohon.KodProgram.find(item => item.p020kprog === kprog);
   // return program ? program.p020namaprogbi : "N/A"; // Default if not found
    if (program) {
      return `${program.p020namaprogbi} (${program.z054bnecdetail})`; // Format both values
    }
    return "N/A"; // Default if not found
  };

    return {
      downloadPDF,
      tempFrom,
      tempUntil,
      fromPopup,
      untilPopup,
      filterFrom,
      filterUntil,
      applyDateFilter,
      getProgramName,
      program,
      kodprogram,
      namaprogram,
      necprogram,
      isHovered,
      isHovered1,
      isHovered2,
      isClicked,
      isClicked1,
      isClicked2,
      handleClick,
      handleClick1,
      handleClick2,
      MohonList,
      tableRef,
      columns: [
      {
          name: "no",
          label: "No",
          align: "justify",
          sortable: false,
        },
        {
          name: "name",
          label: "NAMA PEMOHON",
          field: "p001nama",
          align: "center",
        },
        {
          name: "nokp",
          label: "NO KP/PASSPORT",
          field: "p001nokp",
          align: "center",
        },
        {
          name: "tkhmohon",
          label: "TARIKH MOHON",
          field: "p001tkhpohon",
          align: "center",
        },
        {
          name: "program",
          label: "PROGRAM",
          field: "p001kprog",
          align: "center",
          format: (val) => getProgramName(val), // Call function to get program name
        },
        {
          name: "status",
          label: "STATUS",
          field: "p001status",
          align: "center",
        },
        { name: "actions", label: "TINDAKAN", align: "center" },
      ],
      filter,
      statB,
      bilB,
      bilD,
      bilGF,
      bilLF,
      bilLPPS,
      bilPF,
      filteredRows,
      selectedStatus,
      selectStatus,
      goToViewDetails,
      goToDetailsAdmin,
      goToEditDetailsAdmin,
      onRequest,
      Total,
      statusColor,
      statusDescription,
      // color,
      pagination: {
        rowsPerPage: 5,
      },
      options: {
        customFilters: [
          {
            name: "statusFilter",
            callback: function (row, props) {
              return row.status[0] == props;
            },
          },
        ],
      },
    };
  },
});
</script>
