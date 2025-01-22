<template>
  <q-page class="q-pa-md flex-center">
    <q-page-container style="padding-top: 10px; padding-bottom: 37px; padding-left: 80px">
      <q-card bordered no-shadow fit class="q-pa-md">
        <q-card-section>
          <div class="row q-col-gutter-sm">
            <div class="">
              <span style="font-size: medium; font-weight: bold">Maklumat Permohonan</span>
            </div>
            <div class="">
              <!-- <q-btn dense flat icon="edit" color="negative" @click="updateRow()"><q-tooltip class="bg-indigo"
                  :offset="[10, 10]">
                  Tindakan PPS
                </q-tooltip></q-btn> -->
              <q-btn @click="updateRow2()" icon="edit" outline color="primary" label="Tindakan PPS" class="q-mr-xs" />
            </div>
          </div>
          <hr />
          <q-item type row no-wrap><q-item-section column side justify-center text-grey-8><label
                class="col-form-label q-mb-none" style="margin-left: 10px">Status Permohonan
                : Diluluskan (Peringkat Fakulti)</label>
              <label class="col-form-label q-mb-none" style="margin-left: 10px">Catatan
                : Permohon ini bersetuju untuk menerima tawaran program oleh pihak UniSZA yang bersesuai dengan
                permohonan.</label>
            </q-item-section></q-item>
        </q-card-section>
        <q-tabs v-model="tab" align="justify" narrow-indicator class="q-mb-lg">
          <q-tab class="text-blue" name="mails" label="Profil Pemohon" />
          <q-tab class="text-blue" name="alarms" label="Program Pilihan" />
          <q-tab class="text-blue" name="movies" label="Dokumen Sokongan" />
          <q-tab class="text-blue" name="infodll" label="Maklumat Tambahan" />
          <!-- <q-tab class="text-blue" name="agree" label="Setuju/Disclaimer" /> -->
        </q-tabs>
        <div class="q-gutter-y-xl">
          <q-tab-panels v-model="tab" animated transition-prev="scale" transition-next="scale" class="text-left">
            <q-tab-panel name="mails">
              <div class="col-12 q-mt-sm">
                <q-card bordered no-shadow class="card_style">
                  <q-card-section vert>
                    <div class="row q-col-gutter-lg">
                      <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <q-card bordered no-shadow class="card_style">
                          <q-card-section vert text-center class="image-center"><q-avatar square size="100px"><img
                                src="https://cdn.quasar.dev/img/avatar.png" /></q-avatar></q-card-section>
                          <q-card-section>
                            <q-item type row no-wrap><q-item-section column side justify-center text-grey-8>
                                <label class="col-form-label q-mb-none" style="margin-left: 10px">No KP/Passport :</label>
                                <label class="col-form-label q-mb-none" style="margin-left: 10px">Nama Pemohon :</label>
                                <label class="col-form-label q-mb-none" style="margin-left: 10px">Tarikh Lahir :</label>
                                <label class="col-form-label q-mb-none" style="margin-left: 10px">Status Warganegara
                                  :</label>
                                <label class="col-form-label q-mb-none" style="margin-left: 10px">Warganegara :</label>
                                <label class="col-form-label q-mb-none" style="margin-left: 10px">Status Kecatatan
                                  :</label>
                              </q-item-section></q-item>
                          </q-card-section>
                        </q-card>
                      </div>
                      <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <q-card bordered no-shadow class="card_style">
                          <q-card-section vert>
                            <!-- <q-avatar rounded size="100px"
                              ><img src=""
                            /></q-avatar> -->
                            <q-item type row no-wrap><q-item-section column side justify-center text-grey-8>
                                <label class="col-form-label q-mb-none" style="margin-left: 10px">Alamat Semasa :</label>
                                <label class="col-form-label q-mb-none" style="margin-left: 10px">No Tel (HP) :</label>
                                <label class="col-form-label q-mb-none" style="margin-left: 10px">No Tel (Rumah) :</label>
                                <label class="col-form-label q-mb-none" style="margin-left: 10px">No Tel (Pej) :</label>
                                <label class="col-form-label q-mb-none" style="margin-left: 10px">Fax No :</label>
                              </q-item-section></q-item></q-card-section></q-card>
                      </div>
                      <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <q-card bordered no-shadow class="card_style">
                          <q-card-section vert>
                            <!-- <q-avatar rounded size="100px"
                              ><img src="" /></q-avatar
                            > -->
                            <q-item type row no-wrap><q-item-section column side justify-center text-grey-8>
                                <label class="col-form-label q-mb-none" style="margin-left: 10px">Alamat Tetap :</label>
                                <label class="col-form-label q-mb-none" style="margin-left: 10px">No Tel (HP) :</label>
                                <label class="col-form-label q-mb-none" style="margin-left: 10px">No Tel (Rumah) :</label>
                                <label class="col-form-label q-mb-none" style="margin-left: 10px">No Tel (Pej) :</label>
                                <label class="col-form-label q-mb-none" style="margin-left: 10px">Fax No :</label>
                              </q-item-section></q-item></q-card-section></q-card>
                      </div>
                    </div>
                  </q-card-section>
                </q-card>
              </div>
            </q-tab-panel>

            <q-tab-panel name="alarms">
              <div class="col-12 q-mt-sm">
                <q-card bordered no-shadow class="card_style">
                  <q-card-section vert>
                    <div class="row q-col-gutter-lg">
                      <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <q-card bordered no-shadow class="card_style">
                          <q-card-section>
                            <q-item type row no-wrap><q-item-section column side justify-center text-grey-8>
                                <label class="col-form-label q-mb-none" style="margin-left: 10px">Mod Pengajian :</label>
                                <label class="col-form-label q-mb-none" style="margin-left: 10px">Kaedah :</label>
                                <label class="col-form-label q-mb-none" style="margin-left: 10px">Program :</label>
                                <label class="col-form-label q-mb-none" style="margin-left: 10px">Specialization :</label>
                                <label class="col-form-label q-mb-none" style="margin-left: 10px">Kampus :</label>
                                <label class="col-form-label q-mb-none" style="margin-left: 10px">Cadangan Tajuk
                                  Penyelidikan :</label>
                                <label class="col-form-label q-mb-none" style="margin-left: 10px">Cadangan Penyelia
                                  :</label>
                                <label class="col-form-label q-mb-none" style="margin-left: 10px">Pengalaman Bekerja
                                  :</label>
                              </q-item-section></q-item>
                          </q-card-section>
                        </q-card>
                      </div>
                      <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <q-card bordered no-shadow class="card_style">
                          <q-card-section vert>
                            <q-item type row no-wrap><q-item-section column side justify-center text-grey-8>
                                <label class="col-form-label q-mb-none" style="margin-left: 10px">Kelayakan Akdemik
                                  Tertinggi :</label>
                                <label class="col-form-label q-mb-none" style="margin-left: 10px">Universiti Anugerah
                                  (Bachelor/Setara)
                                  :</label>
                                <label class="col-form-label q-mb-none" style="margin-left: 10px">Negara :</label>
                                <label class="col-form-label q-mb-none" style="margin-left: 10px">CGPA :</label>
                                <label class="col-form-label q-mb-none" style="margin-left: 10px">Fax No :</label>

                                <label class="col-form-label q-mb-none" style="margin-left: 10px">Universiti Anugerah
                                  (Master/Setara) :</label>
                                <label class="col-form-label q-mb-none" style="margin-left: 10px">Negara :</label>
                                <label class="col-form-label q-mb-none" style="margin-left: 10px">CGPA :</label>
                              </q-item-section></q-item></q-card-section></q-card>
                      </div>
                      <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <q-card bordered no-shadow class="card_style">
                          <q-card-section vert><q-item type row no-wrap><q-item-section column side justify-center
                                text-grey-8>
                                <label class="col-form-label q-mb-none" style="margin-left: 10px">BI (SPM) :</label>
                                <label class="col-form-label q-mb-none" style="margin-left: 10px">MUET :</label>
                                <label class="col-form-label q-mb-none" style="margin-left: 10px">
                                  Lain-lain (IELTS/TOEFL) :</label>
                              </q-item-section></q-item></q-card-section></q-card>
                      </div>
                    </div>
                  </q-card-section>
                </q-card>
              </div>
            </q-tab-panel>

            <q-tab-panel name="movies">
              <div class="col-12 q-mt-sm">
                <q-card bordered no-shadow class="card_style">
                  <q-card-section vert>
                    <div class="row q-col-gutter-lg">
                      <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <q-card bordered no-shadow class="card_style">
                          <q-card-section>
                            <q-item type row no-wrap><q-item-section column side justify-center text-grey-8>
                                <label class="col-form-label q-mb-none" style="margin-left: 10px">Salinan No KP/Passport
                                  :</label>
                                <label class="col-form-label q-mb-none" style="margin-left: 10px">Academic Certificates/
                                  Senate Letter/
                                  Completion Letter Of Programme :</label>
                                <label class="col-form-label q-mb-none" style="margin-left: 10px">Transkrip Akademik
                                  :</label>
                                <label class="col-form-label q-mb-none" style="margin-left: 10px">English Language
                                  Qualification :</label>
                                <label class="col-form-label q-mb-none" style="margin-left: 10px">Kertas Kerja
                                  Penyelidikan :</label>
                                <label class="col-form-label q-mb-none" style="margin-left: 10px">Resit Pembayaran
                                  :</label>
                              </q-item-section></q-item>
                          </q-card-section>
                        </q-card>
                      </div>
                    </div>
                  </q-card-section>
                </q-card>
              </div>
            </q-tab-panel>
            <q-tab-panel name="infodll">
              <div class="col-12 q-mt-sm">
                <q-card bordered no-shadow class="card_style">
                  <q-card-section vert>
                    <div class="row q-col-gutter-lg">
                      <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <q-card bordered no-shadow class="card_style">
                          <q-card-section>
                            <q-item type row no-wrap><q-item-section column side justify-center text-grey-8>
                                <label class="col-form-label q-mb-none" style="margin-left: 10px">Maklumat Agent :</label>
                                <label class="col-form-label q-mb-none" style="margin-left: 10px">Sumber Kewangan
                                  :</label>
                                <label class="col-form-label q-mb-none" style="margin-left: 10px">Nama Tajaan :</label>
                                <label class="col-form-label q-mb-none" style="margin-left: 10px">Jumlah Pendapatan (RM)
                                  :</label>
                              </q-item-section></q-item>
                          </q-card-section>
                        </q-card>
                      </div>
                    </div>
                  </q-card-section>
                </q-card>
              </div>
            </q-tab-panel>

          </q-tab-panels>
        </div>

      </q-card>

      <q-card bordered no-shadow fit class="q-pa-md">
        <q-card-section>
          <div class="q-pa-lg q-mt-md">
            <span style="font-size: medium; font-weight: bold">Maklumat Pengesahan Fakulti</span>
            <hr />
          </div>
        </q-card-section>

        <div class="col-12 q-mt-sm">
          <q-card bordered no-shadow class="card_style">
            <q-card-section vert>
              <div class="row q-col-gutter-lg">
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">

                  <q-card-section>
                    <q-item type row no-wrap><q-item-section column side justify-center text-grey-8>
                        <label class="col-form-label q-mb-none" style="margin-left: 10px">Status Pengesahan
                          :</label>
                      </q-item-section></q-item>
                    <q-item type row no-wrap><q-item-section column side justify-center text-grey-8>
                        <label class="col-form-label q-mb-none" style="margin-left: 10px">Catatan Pengesahan
                          :</label>
                      </q-item-section></q-item>
                    <q-item type row no-wrap><q-item-section column side justify-center text-grey-8>
                        <label class="col-form-label q-mb-none" style="margin-left: 10px">Pilihan Tawaran Program Baharu
                          :</label>
                      </q-item-section></q-item>
                    <q-item type row no-wrap><q-item-section column side justify-center text-grey-8>
                        <label class="col-form-label q-mb-none" style="margin-left: 10px">Fakulti
                          :</label>
                      </q-item-section></q-item>
                  </q-card-section>

                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>

      </q-card>
      <!-- Dialogs -->
      <q-dialog v-model="updateTindakanModal">
        <updateTindakanPPS />
      </q-dialog>

      <q-dialog v-model="new_customer1">
        <q-card style="width: 600px; max-width: 60vw;">
          <q-card-section>
            <div class="text-h6">
              Proses Permohonan
              <q-btn round flat dense icon="close" class="float-right" color="grey-8" v-close-popup></q-btn>
            </div>
          </q-card-section>
          <q-separator inset></q-separator>
          <q-card-section class="q-pt-none">
            <q-form class="q-gutter-md">
              <q-list>
                <q-item>
                  <q-item-section>
                    <q-item-label class="q-pb-xs">Tindakan Pengesahan</q-item-label>
                    <q-select class="q-pb-xs" label="Tindakan Pengesahan" color="blue" :options="singleDropdownOptions"
                      outlined dense required :rules="[(val) => !!val || 'Tindakan Pengesahan is required']"
                      style="margin-right: 12px" />
                  </q-item-section>
                </q-item>
                <q-item>
                  <q-item-section>
                    <q-item-label class="q-pb-xs">Catatan Pengesahan</q-item-label>
                    <q-input color="blue" type="textarea" outlined dense label="Catatan Pengesahan"
                      :rules="[(val) => !!val || 'Catatan is required']" required style="margin-right: 12px" />
                  </q-item-section>
                </q-item>
                <!-- <q-item>
                  <q-item-section>
                    <q-item-label class="q-pb-xs">New Address Information</q-item-label>
                    <q-input dense outlined label="New Address Information" />
                  </q-item-section>
                </q-item>
                <q-item>
                  <q-item-section>
                    <q-item-label class="q-pb-xs">Status</q-item-label>
                    <q-input dense outlined label="Status" />
                  </q-item-section>
                </q-item> -->
              </q-list>
            </q-form>
          </q-card-section>

          <q-card-actions align="right" class="submit-button">
            <q-btn label="Simpan" type="submit" color="primary" class="q-mr-sm" v-close-popup @click="Submit()" />
            <q-btn label="Tutup" color="negative" outlined v-close-popup></q-btn>
          </q-card-actions>
        </q-card>
      </q-dialog>
    </q-page-container>
  </q-page>
  <!-- <q-dialog v-model="fullWidth" full-width> xx</q-dialog> -->
</template>

<script>
import { ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import updateTindakanPPS from "./EditPermohonanAdmin.vue";

export default {
  name: "DetailPermohonanAdmin",
  components: {
    updateTindakanPPS,
  },
  setup() {
    const router = useRouter();
    const updateTindakanModal = ref(false);
    const new_customer1 = ref(false);

    const singleDropdownOptions = [
      "Permohonan Diluluskan",
      "Permohonan Tidak Diluluskan",
    ];

    function updateRow() {
      // console.log("Update:", row);
      updateTindakanModal.value = true;
    }
    function updateRow2() {
      // console.log("Update:", row);
      new_customer1.value = true;
    }
    //data() {
    return {
      tab: ref("mails"),
      verticalTab: "contact", // Set a valid default tab name
      horizontalTab: "", // Set a valid default tab name
      splitterModel: 20,

      updateTindakanModal,
      updateRow2,
      singleDropdownOptions,
      new_customer1,
    };
    // },
  },
};

const router = useRouter();

// const profilPemohon = ref([
//   [{ label: "Tarikh Permohonan", value: "01-Aug-2024" }],
// ]);
</script>
<style>
.card-title {
  font-size: 16px;
  margin: 0 0 7px 0;
  font-weight: 500;
}

.card_style {
  border-radius: 12px;
}

.image-center {
  text-align: center;
}

.shadow_custom {
  box-shadow: 0 2px 6px #4359711f !important;
}

.q-col-gutter-y-lg,
.q-col-gutter-lg {
  margin-top: -24px;
}

.q-col-gutter-x-lg,
.q-col-gutter-lg {
  margin-left: -24px;
}

.row,
.column,
.flex {
  display: flex;
  flex-wrap: wrap;
}

*,
*:before,
*:after {
  box-sizing: inherit;
  -webkit-tap-highlight-color: transparent;
  -moz-tap-highlight-color: transparent;
}
</style>
