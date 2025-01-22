<template>
    <q-card>
      <q-page-container style="padding-top: 10px; padding-bottom: 37px; padding-left: 80px">
        <q-page class="q-pa-lg q-mt-md">
          <div class="row q-col-gutter-lg">
  
            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <q-card no-shadow fit bordered class="cursor-pointer" @click="Total('Baru')">
                <q-card-section class="q-card__section--vert q-pa-sm" role="">
                  <q-item row no-wrap class="">
                    <q-item-section column justify-center class=""><q-item-label><span
                          class="text-weight-medium title text-grey-8">Permohonan Baru</span></q-item-label>
                    </q-item-section>
                    <q-item-section side justify-center class=""><q-avatar class="text-warning q-chip--colored q-ml-none"
                        style="
                          font-size: 45px;
                          background-color: rgb(231 247 253);
                        ">
                        <a><span class="text-weight-medium title text-primary">2</span></a>
                      </q-avatar>
                    </q-item-section>
                  </q-item>
                </q-card-section>
              </q-card>
            </div>
  
            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <q-card no-shadow fit bordered class="cursor-pointer" @click="Total('Pindah Fakulti')">
                <q-card-section class="q-card__section--vert q-pa-sm" role="">
                  <q-item row no-wrap class="">
                    <q-item-section column justify-center class=""><q-item-label><span
                          class="text-weight-medium title text-grey-8">Permohonan Pindah Fakulti</span></q-item-label>
                    </q-item-section>
                    <q-item-section side justify-center class=""><q-avatar class="text-warning q-chip--colored q-ml-none"
                        style="
                          font-size: 45px;
                          background-color: rgb(255, 239, 226);
                        ">
                        <span class="text-weight-medium title text-warning">1</span>
                      </q-avatar>
                    </q-item-section>
                  </q-item>
                </q-card-section>
              </q-card>
            </div>
  
            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <q-card no-shadow fit bordered class="cursor-pointer" @click="Total('Lulus')">
                <q-card-section class="q-card__section--vert q-pa-sm" role="">
                  <q-item row no-wrap class="">
                    <q-item-section column justify-center class=""><q-item-label><span
                          class="text-weight-medium title text-grey-8">Permohonan Diluluskan</span></q-item-label>
                    </q-item-section>
                    <q-item-section side justify-center class=""><q-avatar class="text-positive q-chip--colored q-ml-none"
                        style="
                          font-size: 45px;
                          background-color: rgb(225, 246, 232);
                        ">
                        <span class="text-weight-medium title text-positive">1</span>
                      </q-avatar>
                    </q-item-section>
                  </q-item>
                </q-card-section>
              </q-card>
            </div>
  
            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <q-card no-shadow fit bordered class="cursor-pointer" @click="Total('Gagal')">
                <q-card-section class="q-card__section--vert q-pa-sm" role="">
                  <q-item row no-wrap class="">
                    <q-item-section column justify-center class=""><q-item-label><span
                          class="text-weight-medium title text-grey-8">Permohonan Tidak Diluluskan</span></q-item-label>
                    </q-item-section>
                    <q-item-section side justify-center class=""><q-avatar class="text-negative q-chip--colored q-ml-none"
                        style="
                          font-size: 45px;
                          background-color: rgb(253, 228, 227);
                        ">
                        <span class="text-weight-medium title text-negative">1</span>
                      </q-avatar>
                    </q-item-section>
                  </q-item>
                </q-card-section>
              </q-card>
            </div>
            <!-- end 4 kotak -->
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <!-- <q-card bordered no-shadow shadow_custom class="">
                <q-card-section class="q-card__section--vert row q-pa-none">
                  <div
                    class="row full-width q-pa-lg"
                    style="border-bottom: 1px solid lightgrey"
                  >
                    <div
                      class="text-grey-8 col-md-12 col-lg-8 col-xs-8 col-sm-8 q-mb-lg text-weight-medium title"
                    >
                      Search Filter
                    </div>
                    <div
                      class="text-grey-8 col-md-4 col-lg-4 col-xs-12 col-sm-12 q-pr-md"
                    >
                      <span>Kategori Permohonan</span>
                      <div class="row q-gutter-sm">
                        <q-select
                          clearable
                          outlined
                          style="width: 200px"
                          :options="typeStudy"
                          label="Sila Pilih"
                          options-dense
                          input-debounce="0"
                          items-start
                          class="row no-wrap q-field--outlined q-select q-field--auto-height q-select--without-input q-select--without-chips q-select--single q-field--dense"
                        />
                      </div>
                    </div>
                  </div>
                </q-card-section>
              </q-card> -->
  
              <q-table flat bordered no-wrap :rows="dataPemohon" :columns="columns" row-key="id"
                :horizontal-separator="separator" style="padding: 2px; border: 1px solid lightgray"
                v-model:pagination.sync="pagination" :filter="filter" ref="tableRef" @request="onRequestAdmin">
                <template v-slot:top-left>
                  <div class="">
                    <span style="font-size: medium; font-weight: bold">Senarai Permohonan</span>
                    <hr />
                  </div>
                </template>
                <template v-slot:body-cell-actions="props">
                  <q-td align="center">
                    <q-btn dense flat color="black" icon="visibility" @click="goToDetailsAdmin(props.row.id)" />
                    <q-btn dense flat icon="edit" color="primary" @click="goToEditDetailsAdmin(props.row.id)" />
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
                  <q-td :props="props">
                    <q-chip :color="props.row.status == 'Lulus'
                      ? 'green'
                      : props.row.status == 'Gagal'
                        ? 'red'
                        : props.row.status == 'Pindah Fakulti'
                          ? 'yellow'
                          : 'blue'
                      " text-color="white" dense class="text-weight-bolder" square style="width: 100px">{{
      props.row.status }}
                    </q-chip>
                  </q-td>
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
    color: var(--q-warning) !important;
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
  import { ref, onMounted } from "vue";
  
  export default {
    setup() {
      const tableRef = ref();
      const router = useRouter();
      const route = useRoute();
      const type = ref(route.params.type);
      const filter = ref("");
  
      // lookup
      // const typeStudy = ref([
      //   { label: "Phd", value: "phd" },
      //   { label: "Master", value: "master" },
      // ]);
  
      //datatable
  
      const columns = [
        { name: "no", label: "NO", align: "center", field: "no", sortable: true },
        {
          name: "name",
          label: "NAMA PEMOHON",
          align: "left",
          field: "name",
          sortable: true,
        },
        {
          name: "tkhmohon",
          label: "TARIKH MOHON",
          align: "left",
          field: "tkhmohon",
          sortable: true,
        },
        {
          name: "program",
          label: "PROGRAM",
          align: "left",
          field: "program",
          sortable: true,
        },
        {
          name: "status",
          label: "STATUS",
          align: "left",
          field: "status",
          sortable: true,
        },
        {
          name: "actions",
          label: "TINDAKAN",
          align: "center",
          field: "actions",
          sortable: false,
        },
      ];
  
      const dataPemohon = [
        {
          id: 1,
          no: 1,
          name: "Yani",
          program: "FST-Science Computer (FSTA05)",
          tkhmohon: "01/10/2024",
          status: "Baru",
        },
        {
          id: 2,
          no: 2,
          name: "Ali",
          program: "FSK-Medical Science (FSKA01)",
          tkhmohon: "01/10/2024",
          status: "Baru",
        },
        {
          id: 3,
          no: 3,
          name: "Nur",
          program: "FST-Science Computer (FSTA05)",
          tkhmohon: "01/10/2024",
          status: "Lulus",
        },
        {
          id: 4,
          no: 4,
          name: "Md",
          program: "FST-Science Computer (FSTA05)",
          tkhmohon: "01/10/2024",
          status: "Pindah Fakulti",
        },
        {
          id: 5,
          no: 5,
          name: "AA",
          program: "FST-Science Computer (FSTA05)",
          tkhmohon: "01/10/2024",
          status: "Gagal",
        },
        {
          id: 6,
          no: 6,
          name: "BB",
          program: "FST-Science Computer (FSTA05)",
          tkhmohon: "01/10/2024",
          status: "Lulus",
        },
      ];
  
      // const filteredApplications = ref([]);
  
      // const fetchApplications = () => {
      // if (type.value === 'Baru') {
      //   filteredApplications.value = dataPemohon;
      // } else {
      //   filteredApplications.value = dataPemohon.filter(app => app.status === type.value);
      // }
  
      // filteredApplications.value.length = dataPemohon.filter(app => app.status === type.value);
  
      //console.log("check value:", filteredApplications.value.length)
  
      //pagination.value.rowsNumber = filteredApplications.value.length; // Update rowsNumber for pagination
      //};
  
      onMounted(() => {
        //filter();
      });
  
  
      const Total = (type) => {
        router.push({ name: 'LandingPageSaringan', params: { type } });
        console.log("Total:", type);
      }
  
      const goToDetailsAdmin = (id) => {
        router.push({ name: "DetailsPermohonanAdmin", params: { id } });
        // console.log("check:", id);
      };
      const goToEditDetailsAdmin = (id) => {
        router.push({ name: "EditPermohonanAdmin", params: { id } });
      };
      const onRequestAdmin = (props) => {
        // Handle request for pagination and sorting here if necessary
        console.log("Request:", props);
      };
  
  
  
  
      return {
        tableRef,
        columns,
        filter,
        dataPemohon,
        goToDetailsAdmin,
        goToEditDetailsAdmin,
        onRequestAdmin,
        Total,
        pagination: {
          rowsPerPage: 5,
        },
        // filteredApplications,
      };
    },
  };
  
  // datatable
  // const columns = [
  //   {
  //     name: "name",
  //     required: true,
  //     label: "NAMA PEMOHON",
  //     align: "left",
  //     field: (row) => row.name,
  //     format: (val) => `${val}`,
  //     sortable: true,
  //   },
  //   {
  //     name: "calories",
  //     align: "center",
  //     label: "TARIKH MOHON",
  //     field: "calories",
  //     sortable: true,
  //   },
  
  //   {
  //     name: "calcium",
  //     label: "STATUS",
  //     field: "calcium",
  //     sortable: true,
  //     sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  //   },
  //   {
  //     name: "iron",
  //     label: "TINDAKAN",
  //     field: "iron",
  //     sortable: true,
  //     sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  //   },
  // ];
  
  // const rows = [
  //   {
  //     name: "Frozen Yogurt",
  //     calories: 159,
  //     fat: 6.0,
  //     carbs: 24,
  //     protein: 4.0,
  //     sodium: 87,
  //     calcium: "14%",
  //     iron: "1%",
  //   },
  //   {
  //     name: "Ice cream sandwich",
  //     calories: 237,
  //     fat: 9.0,
  //     carbs: 37,
  //     protein: 4.3,
  //     sodium: 129,
  //     calcium: "8%",
  //     iron: "1%",
  //   },
  //   {
  //     name: "Eclair",
  //     calories: 262,
  //     fat: 16.0,
  //     carbs: 23,
  //     protein: 6.0,
  //     sodium: 337,
  //     calcium: "6%",
  //     iron: "7%",
  //   },
  //   {
  //     name: "Cupcake",
  //     calories: 305,
  //     fat: 3.7,
  //     carbs: 67,
  //     protein: 4.3,
  //     sodium: 413,
  //     calcium: "3%",
  //     iron: "8%",
  //   },
  //   {
  //     name: "Gingerbread",
  //     calories: 356,
  //     fat: 16.0,
  //     carbs: 49,
  //     protein: 3.9,
  //     sodium: 327,
  //     calcium: "7%",
  //     iron: "16%",
  //   },
  //   {
  //     name: "Jelly bean",
  //     calories: 375,
  //     fat: 0.0,
  //     carbs: 94,
  //     protein: 0.0,
  //     sodium: 50,
  //     calcium: "0%",
  //     iron: "0%",
  //   },
  //   {
  //     name: "Lollipop",
  //     calories: 392,
  //     fat: 0.2,
  //     carbs: 98,
  //     protein: 0,
  //     sodium: 38,
  //     calcium: "0%",
  //     iron: "2%",
  //   },
  //   {
  //     name: "Honeycomb",
  //     calories: 408,
  //     fat: 3.2,
  //     carbs: 87,
  //     protein: 6.5,
  //     sodium: 562,
  //     calcium: "0%",
  //     iron: "45%",
  //   },
  //   {
  //     name: "Donut",
  //     calories: 452,
  //     fat: 25.0,
  //     carbs: 51,
  //     protein: 4.9,
  //     sodium: 326,
  //     calcium: "2%",
  //     iron: "22%",
  //   },
  //   {
  //     name: "KitKat",
  //     calories: 518,
  //     fat: 26.0,
  //     carbs: 65,
  //     protein: 7,
  //     sodium: 54,
  //     calcium: "12%",
  //     iron: "6%",
  //   },
  // ];
  </script>
  