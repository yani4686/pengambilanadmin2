<template>
    <q-card>
      <q-page-container style="padding-top: 10px; padding-bottom: 37px; padding-left: 80px">
        <q-page class="q-pa-lg q-mt-md">
          <div class="row q-col-gutter-lg">
  
            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <q-card no-shadow fit bordered class="cursor-pointer"  
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
              @click="handleClick">
                <q-card-section class="q-card__section--vert q-pa-sm" role="">
                  <q-item row no-wrap class="">
                    <q-item-section column justify-center class=""><q-item-label><span
                          class="text-weight-medium title text-grey-8">Calon Jaya</span></q-item-label>
                    </q-item-section>
                    <q-item-section side justify-center class=""><q-avatar class="text-warning q-chip--colored q-ml-none"
                        style="
                          font-size: 45px;
                          background-color: rgb(231 247 253);
                        ">
                        <a><span class="text-weight-medium title text-primary">{{bilLPPS}}</span></a>
                      </q-avatar>
                    </q-item-section>
                  </q-item>
                </q-card-section>
              </q-card>
            </div>
  
            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <q-card no-shadow fit bordered class="cursor-pointer" :style="{
                  backgroundColor: isClicked1
                    ? '#FFFF8F'
                    : isHovered1
                    ? '#FFFF8F'
                    : '#ffffff',
                }"
                :class="{ hovered: isHovered1, clicked: isClicked1 }"
                @mouseover="isHovered1 = true"
                @mouseleave="isHovered1 = false"
                @click="handleClick1">
                <q-card-section class="q-card__section--vert q-pa-sm" role="">
                  <q-item row no-wrap class="">
                    <q-item-section column justify-center class=""><q-item-label><span
                          class="text-weight-medium title text-grey-8">Terima Tawaran</span></q-item-label>
                    </q-item-section>
                    <q-item-section side justify-center class=""><q-avatar class="text-warning q-chip--colored q-ml-none"
                        style="
                          font-size: 45px;
                          background-color: rgb(255, 239, 226);
                        ">
                        <span class="text-weight-medium title text-warning">{{ bilTerima }}</span>
                      </q-avatar>
                    </q-item-section>
                  </q-item>
                </q-card-section>
              </q-card>
            </div>
  
            <!-- end 4 kotak -->
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
               
              <q-table flat bordered no-wrap :rows="filteredRows" :columns="columns" row-key="p001nokp"
              :horizontal-separator="separator" style="padding: 2px; border: 1px solid lightgray"
              v-model:pagination.sync="pagination" :filter="filter" :options="options" ref="tableRef"
              @request="onRequest">
              <template v-slot:top-left>
                <div class="">
                  <span style="font-size: medium; font-weight: bold">Senarai Permohonan Yang Diluluskan</span>
                  <hr />
                </div>
              </template>
              <template v-slot:body-cell-actions="props">
                <q-td align="center">
                  <q-btn dense flat color="black" icon="edit" @click="goToDetailsAdmin(props.row.p001nokp)" />
                  <!-- <q-btn dense flat icon="edit" color="primary" @click="goToEditDetails(props.row.p001nokp)" /> -->
                </q-td>
              </template>
              <template v-slot:top-right>
                <div class="row q-gutter-sm">
                  <q-col auto>
                    <q-btn flat round>
                      <img src="src/assets/pdf.svg" alt="PDF Icon" class="pdf" />
                      <q-tooltip class="bg-no-color" :offset="[5, 5]">
                        Export PDF
                      </q-tooltip>
                    </q-btn></q-col>
                  <q-col auto>
                    <q-btn flat round>
                      <img src="src/assets/Excel.png" alt="Excel Icon" class="excel" />
                      <q-tooltip class="bg-no-color" :offset="[5, 5]">
                        Export Excel
                      </q-tooltip>
                    </q-btn>
                  </q-col>
                  <q-input outlined dense debounce="300" v-model="filter" placeholder="Search" items-start class="">
                    <template v-slot:append> <q-icon name="search" /> </template></q-input>
                </div>
              </template>
              <template v-slot:body-cell-status="props">
    <q-chip
      :color="statusColor(props.row.p001status)"
      text-color="white"
      dense
      class="text-weight-bolder flex justify-center items-center"
      square
      style="width: 100px; height: 100%;"
    >
      <!-- {{ props.row.p001status }} -->
      {{ statusDescription(props.row.p001status) }}
    </q-chip>
  </template>
            </q-table>
          </div>
        </div>
        <!-- end 1st gutter -->
      </q-page>
    </q-page-container>
  </q-card>
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

.row>.col-md-12 {
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
</style>
<script>
import { useRoute, useRouter } from "vue-router";
import { defineComponent, onMounted, ref, computed,reactive } from "vue";
import { useRetCalonJayaStorePps } from "src/stores/getcalonjaya";

export default defineComponent({
  name: "ListPageOffer",
  setup() {

    const storeGetCalonJaya = useRetCalonJayaStorePps(); // Pinia store

   // Computed property for reactive state
   const JayaList = computed(() => {
      const list = storeGetCalonJaya.JayaList;
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
    const statB = ref('');
    const bilTerima = ref('');
    const bilLPPS = ref('');
    const selectedStatus = ref("");
    const statusterima = ref('');
    const isHovered = ref(false);
    const isHovered1 = ref(false);
    const isClicked = ref(false);
    const isClicked1 = ref(false);
  
    const handleClick = () => {
      isClicked.value = !isClicked.value;
      selectStatus("", "status");  // Clear filter, show all
    };

    const handleClick1 = () => {
      isClicked1.value = !isClicked1.value;
      selectStatus("1", "ststerimatwr");;
    };

    const selectStatus = (status, mode = 'status') => {
      if (status === "") {
        selectedStatus.value = [];
    } else {
        selectedStatus.value = [status];
    }
    filterMode.value = mode;  // Set whether to filter on 'status' or 'ststerimatwr'
  };

  const filterMode = ref('status');

    // Filters rows based on selected status
    const filteredRows = computed(() => {
  //  console.log("Filtering Rows...");
  //  console.log("Selected Status:", selectedStatus.value);
  //  console.log("Filter Mode:", filterMode.value);

    if (selectedStatus.value.length === 0) {
      //  console.log("No filter applied - returning all rows.");
        return JayaList.value;  // Show all rows
    }

    const result = JayaList.value.filter((row) => {
      //  console.log("Checking row:", row);

        if (filterMode.value === 'status') {
         //   console.log(`Comparing p001status (${row.p001status}) with selectedStatus`, selectedStatus.value);
            return selectedStatus.value.includes(row.p001status);
        } else if (filterMode.value === 'ststerimatwr') {
        //    console.log(`Comparing p001ststerimatwr (${row.p001ststerimatwr}) with selectedStatus`, selectedStatus.value);
            return selectedStatus.value.includes(row.p001ststerimatwr);
        }
        return true;
    });

  //  console.log("Filtered Result:", result);
    return result;
});


//   const filteredRows = computed(() => {
//     if (!selectedStatus.value) {
//         return storeGetCalonJaya.JayaList;
//     }
//     return storeGetCalonJaya.JayaList.filter(row => row.p001ststerimatwr === selectedStatus.value);
// });

  const statusColor = (status) => {
  const colors = {
    '1': 'green',
    '2': 'yellow',
    '3': 'red',
    '4': 'yellow',
    '5': 'yellow',
    '6': 'red',
    '0': 'blue',
    '' : 'grey',
  };
  return colors[status] || 'grey'; // Default to grey if status is unknown
};

const statusDescription = (status) => {
 // console.log('Status:', status); // Debugging
  const descriptions = {
    '1': 'Approved',
    '2': 'Pending',
    '3': 'Rejected',
    '4': 'In Review',
    '5': 'Under Processing',
    '6': 'Requires Action',
    '0': 'Baru',
    '': 'Draft',
  };
  return descriptions[status] || 'Draft';
};

const program = ref("");
    const getProgramName = (kprog) => {

    const program = storeGetCalonJaya.KodProgram.find(item => item.p020kprog === kprog);
   // return program ? program.p020namaprogbi : "N/A"; // Default if not found
    if (program) {
      return `${program.p020namaprogbi} (${program.z054bnecdetail})`; // Format both values
    }
    return "N/A"; // Default if not found
  };
    

  // Fetch data on component mount
  onMounted(() => {
      onLoad();
    });

    // Load data from the store
    async function onLoad() {
  try {
    await storeGetCalonJaya.fetchKodProgram();
    // Fetch data for MohonList
    await storeGetCalonJaya.fetchP();
    if (storeGetCalonJaya.JayaList.length > 0) {
        // Set initial filter value to first row's p001ststerimatwr
        statusterima.value = storeGetCalonJaya.JayaList[0].p001ststerimatwr;
        selectedStatus.value = [statusterima.value];  // Auto-select initial filter
    }
   // console.log(statusterima.value);
    // Fetch data for bilstat
    await storeGetCalonJaya.fetchbiljaya();
    bilLPPS.value = storeGetCalonJaya.Countjayabystat.billuluspps || '';
    bilTerima.value = storeGetCalonJaya.Countjayabystat.bilterima || '';
    //console.log("Bilstat fetched successfully:", bilB.value);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
    }


    const Total = (type) => {
      console.log("Total:", type);
    }

    const goToDetailsAdmin = (p001nokp) => {
      router.push({ name: "DetailsCalonJaya", params: { p001nokp } });
    };

    const goToEditDetailsAdmin = (p001nokp) => {
      router.push({ name: "EditPermohonanAdmin", params: { p001nokp } });
    };

    const onRequest = (props) => {
      // Handle request for pagination and sorting here if necessary
      console.log("Request:", props);
    };

    return {
      program,
      getProgramName,
      filterMode,
      isHovered,  
      isHovered1,  
      isClicked,  
      isClicked1,  
      handleClick,
      handleClick1,
      statusterima,
      JayaList,
      tableRef,
      columns: [
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
      bilLPPS,
      bilTerima,
      filteredRows,
      selectedStatus,
      selectStatus,
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
        customFilters: [{
          name: 'statusFilter',
          callback: function (row, props) {
            return row.status[0] == props;
          }
        }]
      }
      };
  },
  });


</script>
  