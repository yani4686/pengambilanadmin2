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
              <!-- <q-btn dense flat icon="edit" color="negative" @click="updateRow()">
                <q-tooltip class="bg-indigo" :offset="[10, 10]">
                  Tindakan Fakulti
                </q-tooltip>
              </q-btn> -->
              <q-btn @click="updateRow1()" icon="edit" outline color="primary" label="Tindakan Fakulti" class="q-mr-xs" />
            </div>
          </div>

          <hr />

          <q-item type row no-wrap>
            <q-item-section column side justify-center text-grey-8><label class="col-form-label q-mb-none"
                style="margin-left: 10px">Status Permohonan
                : Baru</label>
              <label class="col-form-label q-mb-none" style="margin-left: 10px">Jenis Permohonan : Laluan Perdana.</label>
              <label class="col-form-label q-mb-none" style="margin-left: 10px">Catatan
                : Permohon ini bersetuju untuk menerima tawaran program oleh pihak UniSZA yang bersesuai dengan
                permohonan.</label>
            </q-item-section>
          </q-item>

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
                      <div class="col-lg-6 col-md-4 col-sm-12 col-xs-12">
                        <q-card bordered no-shadow class="card_style">
                          <q-card-section vert text-center class="image-center"><q-avatar square size="100px"><img
                                src="https://cdn.quasar.dev/img/avatar.png" /></q-avatar></q-card-section>
                          <q-card-section>
                            <div class="row">
                              <div class="col-4 q-px-xs">
                                <q-input :readonly="true" dense outlined class="bg-grey-4"
                                  label="No KP/Passport"></q-input>
                              </div>
                              <div class="col-8 q-px-xs">
                                <q-input :readonly="true" dense label="0005"></q-input>
                              </div>


                              <div class="col-4 q-px-xs">
                                <q-input :readonly="true" dense outlined class="bg-grey-4" label="Nama"></q-input>
                              </div>
                              <div class="col-8 q-px-xs">
                                <q-input :readonly="true" dense label="Nur"></q-input>
                              </div>

                              <div class="col-4 q-px-xs">
                                <q-input :readonly="true" dense outlined class="bg-grey-4" label="Tarikh Lahir"></q-input>
                              </div>
                              <div class="col-8 q-px-xs">
                                <q-input :readonly="true" dense label="04/06/1986"></q-input>
                              </div>
                              <div class="col-4 q-px-xs">
                                <q-input :readonly="true" dense outlined class="bg-grey-4" label="Status
                                    Warganegara"></q-input>
                              </div>
                              <div class="col-8 q-px-xs">
                                <q-input :readonly="true" dense label="Malaysia"></q-input>
                              </div>
                              <div class="col-4 q-px-xs">
                                <q-input :readonly="true" dense outlined class="bg-grey-4"
                                  label="Status Kecatatan"></q-input>
                              </div>
                              <div class="col-8 q-px-xs">
                                <q-input :readonly="true" dense label="Tiada Kecatatan"></q-input>
                              </div>
                            </div>


                          </q-card-section>
                        </q-card>
                      </div>
                      <div class="col-lg-6 col-md-4 col-sm-12 col-xs-12">
                        <q-card bordered no-shadow class="card_style">
                          <q-card-section vert>
                            <!-- <q-avatar rounded size="100px"
                              ><img src=""
                            /></q-avatar> -->
                            <!-- <q-item type row no-wrap>
                              <q-item-section column side justify-center text-grey-8>
                                <label class="col-form-label q-mb-none" style="margin-left: 10px">Alamat Semasa :</label>
                                <label class="col-form-label q-mb-none" style="margin-left: 10px">No Tel (HP) :</label>
                                <label class="col-form-label q-mb-none" style="margin-left: 10px">No Tel (Rumah) :</label>
                                <label class="col-form-label q-mb-none" style="margin-left: 10px">No Tel (Pej) :</label>
                                <label class="col-form-label q-mb-none" style="margin-left: 10px">Fax No :</label>
                              </q-item-section>
                            </q-item> -->
                            <div class="row">
                              <div class="col-4 q-px-xs">
                                <q-input :readonly="true" dense outlined class="bg-grey-4"
                                  label="Alamat Semasa"></q-input>
                              </div>
                              <div class="col-8 q-px-xs">
                                <q-input :readonly="true" dense label="300 Kg Kota"></q-input>
                              </div>


                              <div class="col-4 q-px-xs">
                                <q-input :readonly="true" dense outlined class="bg-grey-4" label="No Tel (HP)"></q-input>
                              </div>
                              <div class="col-2 q-px-xs">
                                <q-input :readonly="true" dense label="0162321111"></q-input>
                              </div>

                              <div class="col-4 q-px-xs">
                                <q-input :readonly="true" dense outlined class="bg-grey-4"
                                  label="No Tel (Rumah)"></q-input>
                              </div>
                              <div class="col-2 q-px-xs">
                                <q-input :readonly="true" dense label="095332222"></q-input>
                              </div>
                              <div class="col-4 q-px-xs">
                                <q-input :readonly="true" dense outlined class="bg-grey-4" label="No Tel (Pej)"></q-input>
                              </div>
                              <div class="col-2 q-px-xs">
                                <q-input :readonly="true" dense label="Tiada"></q-input>
                              </div>
                              <div class="col-4 q-px-xs">
                                <q-input :readonly="true" dense outlined class="bg-grey-4" label="Fax No"></q-input>
                              </div>
                              <div class="col-2 q-px-xs">
                                <q-input :readonly="true" dense label="Tiada"></q-input>
                              </div>
                            </div>
                            <hr />
                            <div class="row">
                              <div class="col-4 q-px-xs">
                                <q-input :readonly="true" dense outlined class="bg-grey-4" label="Alamat Tetap"></q-input>
                              </div>
                              <div class="col-8 q-px-xs">
                                <q-input :readonly="true" dense label="300 Kg Kota"></q-input>
                              </div>


                              <div class="col-4 q-px-xs">
                                <q-input :readonly="true" dense outlined class="bg-grey-4" label="No Tel (HP)"></q-input>
                              </div>
                              <div class="col-2 q-px-xs">
                                <q-input :readonly="true" dense label="0162321111"></q-input>
                              </div>

                              <div class="col-4 q-px-xs">
                                <q-input :readonly="true" dense outlined class="bg-grey-4"
                                  label="No Tel (Rumah)"></q-input>
                              </div>
                              <div class="col-2 q-px-xs">
                                <q-input :readonly="true" dense label="095332222"></q-input>
                              </div>
                              <div class="col-4 q-px-xs">
                                <q-input :readonly="true" dense outlined class="bg-grey-4" label="No Tel (Pej)"></q-input>
                              </div>
                              <div class="col-2 q-px-xs">
                                <q-input :readonly="true" dense label="Tiada"></q-input>
                              </div>
                              <div class="col-4 q-px-xs">
                                <q-input :readonly="true" dense outlined class="bg-grey-4" label="Fax No"></q-input>
                              </div>
                              <div class="col-2 q-px-xs">
                                <q-input :readonly="true" dense label="Tiada"></q-input>
                              </div>
                            </div>

                          </q-card-section>
                        </q-card>
                      </div>
                      <!-- <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <q-card bordered no-shadow class="card_style">
                          <q-card-section vert>

                            <q-item type row no-wrap><q-item-section column side justify-center text-grey-8>
                                <label class="col-form-label q-mb-none" style="margin-left: 10px">Alamat Tetap :</label>
                                <label class="col-form-label q-mb-none" style="margin-left: 10px">No Tel (HP) :</label>
                                <label class="col-form-label q-mb-none" style="margin-left: 10px">No Tel (Rumah) :</label>
                                <label class="col-form-label q-mb-none" style="margin-left: 10px">No Tel (Pej) :</label>
                                <label class="col-form-label q-mb-none" style="margin-left: 10px">Fax No :</label>
                              </q-item-section></q-item></q-card-section></q-card>
                      </div> -->
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
                            <!-- <q-item type row no-wrap><q-item-section column side justify-center text-grey-8>
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
                              </q-item-section></q-item> -->
                            <div class="row">
                              <div class="col-4 q-px-xs">
                                <q-input :readonly="true" dense outlined class="bg-grey-4"
                                  label="Mod Pengajian"></q-input>
                              </div>
                              <div class="col-8 q-px-xs">
                                <q-input :readonly="true" dense label="Sepenuh Masa"></q-input>
                              </div>


                              <div class="col-4 q-px-xs">
                                <q-input :readonly="true" dense outlined class="bg-grey-4" label="Kaedah"></q-input>
                              </div>
                              <div class="col-8 q-px-xs">
                                <q-input :readonly="true" dense label="Research"></q-input>
                              </div>

                              <div class="col-4 q-px-xs">
                                <q-input :readonly="true" dense outlined class="bg-grey-4" label="Program"></q-input>
                              </div>
                              <div class="col-8 q-px-xs">
                                <q-input :readonly="true" dense label="FIK-MASTER OF SCIENCE"></q-input>
                              </div>
                              <div class="col-4 q-px-xs">
                                <q-input :readonly="true" dense outlined class="bg-grey-4"
                                  label="Specialization"></q-input>
                              </div>
                              <div class="col-8 q-px-xs">
                                <q-input :readonly="true" dense label="Tiada"></q-input>
                              </div>
                              <div class="col-4 q-px-xs">
                                <q-input :readonly="true" dense outlined class="bg-grey-4" label="Cadangan Tajuk
                                  Penyelidikan"></q-input>
                              </div>
                              <div class="col-8 q-px-xs">
                                <q-input textarea :readonly="true" dense label="xxxxx"></q-input>
                              </div>
                            </div>

                            <div class="row">
                              <div class="col-4 q-px-xs">
                                <q-input :readonly="true" dense outlined class="bg-grey-4"
                                  label="Cadangan Penyelia"></q-input>
                              </div>
                              <div class="col-8 q-px-xs">
                                <q-input :readonly="true" dense label="Dr Ali"></q-input>
                              </div>


                              <div class="col-4 q-px-xs">
                                <q-input :readonly="true" dense outlined class="bg-grey-4"
                                  label="Pengalaman Bekerja)"></q-input>
                              </div>
                              <div class="col-2 q-px-xs">
                                <q-input :readonly="true" dense label="2 Tahun"></q-input>
                              </div>

                              <!-- <div class="col-4 q-px-xs">
                                <q-input :readonly="true" dense outlined class="bg-grey-4"
                                  label="No Tel (Rumah)"></q-input>
                              </div>
                              <div class="col-2 q-px-xs">
                                <q-input :readonly="true" dense label="095332222"></q-input>
                              </div>
                              <div class="col-4 q-px-xs">
                                <q-input :readonly="true" dense outlined class="bg-grey-4" label="No Tel (Pej)"></q-input>
                              </div>
                              <div class="col-2 q-px-xs">
                                <q-input :readonly="true" dense label="Tiada"></q-input>
                              </div>
                              <div class="col-4 q-px-xs">
                                <q-input :readonly="true" dense outlined class="bg-grey-4" label="Fax No"></q-input>
                              </div>
                              <div class="col-2 q-px-xs">
                                <q-input :readonly="true" dense label="Tiada"></q-input>
                              </div> -->
                            </div>
                          </q-card-section>
                        </q-card>
                      </div>
                      <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <q-card bordered no-shadow class="card_style">
                          <q-card-section vert>
                            <!-- <q-item type row no-wrap><q-item-section column side justify-center text-grey-8>
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
                              </q-item-section></q-item> -->
                            <div class="row">
                              <div class="col-4 q-px-xs">
                                <q-input :readonly="true" dense outlined class="bg-grey-4" label="Kelayakan Akdemik
                                  Tertinggi"></q-input>
                              </div>
                              <div class="col-8 q-px-xs">
                                <q-input :readonly="true" dense label="Ijazah Sarjana Muda (Bachelor/Setara)"></q-input>
                              </div>

                              <div class="col-4 q-px-xs">
                                <q-input :readonly="true" dense outlined class="bg-grey-4" label="Universiti Anugerah
                                  (Bachelor/Setara)"></q-input>
                              </div>
                              <div class="col-8 q-px-xs">
                                <q-input :readonly="true" dense label="UKM"></q-input>
                              </div>

                              <div class="col-4 q-px-xs">
                                <q-input :readonly="true" dense outlined class="bg-grey-4"
                                  label="Negara Anugerah"></q-input>
                              </div>
                              <div class="col-8 q-px-xs">
                                <q-input :readonly="true" dense label="Malaysia"></q-input>
                              </div>
                              <div class="col-4 q-px-xs">
                                <q-input :readonly="true" dense outlined class="bg-grey-4" label="CGPA"></q-input>
                              </div>

                              <div class="col-8 q-px-xs">
                                <q-input :readonly="true" dense label="3.50"></q-input>
                              </div>
                              <!-- <hr /> -->
                            </div>
                            <div class="row">
                              <div class="col-4 q-px-xs">
                                <q-input :readonly="true" dense outlined class="bg-grey-4" label="Universiti Anugerah
                                  (Master/Setara)"></q-input>
                              </div>
                              <div class="col-8 q-px-xs">
                                <q-input :readonly="true" dense label="UKM"></q-input>
                              </div>
                              <div class="col-4 q-px-xs">
                                <q-input :readonly="true" dense outlined class="bg-grey-4" label="CGPA"></q-input>
                              </div>

                              <div class="col-8 q-px-xs">
                                <q-input :readonly="true" dense label="3.50"></q-input>
                              </div>

                            </div>
                          </q-card-section>
                        </q-card>
                      </div>
                      <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <q-card bordered no-shadow class="card_style">
                          <q-card-section vert>
                            <!-- <q-item type row no-wrap><q-item-section column side justify-center
                                text-grey-8>
                                <label class="col-form-label q-mb-none" style="margin-left: 10px">BI (SPM) :</label>
                                <label class="col-form-label q-mb-none" style="margin-left: 10px">MUET :</label>
                                <label class="col-form-label q-mb-none" style="margin-left: 10px">
                                  Lain-lain (IELTS/TOEFL) :</label>
                              </q-item-section></q-item> -->
                            <div class="row">
                              <div class="col-4 q-px-xs">
                                <q-input :readonly="true" dense outlined class="bg-grey-4"
                                  label="Kelayakan Bahasa Inggeris"></q-input>
                              </div>
                              <div class="col-8 q-px-xs">
                                <q-input :readonly="true" dense label="Ada"></q-input>
                              </div>
                              <div class="col-4 q-px-xs">
                                <q-input :readonly="true" dense outlined class="bg-grey-4" label="Jenis Exam"></q-input>
                              </div>
                              <div class="col-8 q-px-xs">
                                <q-input :readonly="true" dense label="MUET"></q-input>
                              </div>
                              <div class="col-4 q-px-xs">
                                <q-input :readonly="true" dense outlined class="bg-grey-4" label="Markah"></q-input>
                              </div>
                              <div class="col-8 q-px-xs">
                                <q-input :readonly="true" dense label="Band 3"></q-input>
                              </div>
                              <div class="col-4 q-px-xs">
                                <q-input :readonly="true" dense outlined class="bg-grey-4"
                                  label="Tarikh Peperiksaan"></q-input>
                              </div>
                              <div class="col-8 q-px-xs">
                                <q-input :readonly="true" dense label="02/02/2024"></q-input>
                              </div>
                            </div>
                          </q-card-section></q-card>
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
                      <div class="col-lg-6 col-md-4 col-sm-12 col-xs-12">
                        <q-card bordered no-shadow class="card_style">
                          <q-card-section>
                            <!-- <q-item type row no-wrap><q-item-section column side justify-center text-grey-8>
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
                              </q-item-section></q-item> -->
                            <div class="row">
                              <div class="col-4 q-px-xs">
                                <q-input :readonly="true" dense outlined class="bg-grey-4"
                                  label="Salinan No KP/Passport"></q-input>
                              </div>
                              <div class="col-8 q-px-xs">
                                <q-input :readonly="true" dense label=""></q-input>
                              </div>
                              <div class="col-4 q-px-xs">
                                <q-input :readonly="true" dense outlined class="bg-grey-4"
                                  label="Academic Certificates"></q-input>
                              </div>
                              <div class="col-8 q-px-xs">
                                <q-input :readonly="true" dense label=""></q-input>
                              </div>
                              <div class="col-4 q-px-xs">
                                <q-input :readonly="true" dense outlined class="bg-grey-4"
                                  label="Transkrip Akademik"></q-input>
                              </div>
                              <div class="col-8 q-px-xs">
                                <q-input :readonly="true" dense label=""></q-input>
                              </div>
                              <div class="col-4 q-px-xs">
                                <q-input :readonly="true" dense outlined class="bg-grey-4"
                                  label="Kelayakan Bahasa Inggeris"></q-input>
                              </div>
                              <div class="col-8 q-px-xs">
                                <q-input :readonly="true" dense label=""></q-input>
                              </div>
                              <div class="col-4 q-px-xs">
                                <q-input :readonly="true" dense outlined class="bg-grey-4" label="Kertas Kerja
                                  Penyelidikan"></q-input>
                              </div>
                              <div class="col-8 q-px-xs">
                                <q-input :readonly="true" dense label=""></q-input>
                              </div>
                              <div class="col-4 q-px-xs">
                                <q-input :readonly="true" dense outlined class="bg-grey-4"
                                  label="Resit Pembayaran"></q-input>
                              </div>
                              <div class="col-8 q-px-xs">
                                <q-input :readonly="true" dense label=""></q-input>
                              </div>
                            </div>
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
                      <div class="col-lg-6 col-md-4 col-sm-12 col-xs-12">
                        <q-card bordered no-shadow class="card_style">
                          <q-card-section>
                            <!-- <q-item type row no-wrap><q-item-section column side justify-center text-grey-8>
                                <label class="col-form-label q-mb-none" style="margin-left: 10px">Maklumat Agent :</label>
                                <label class="col-form-label q-mb-none" style="margin-left: 10px">Sumber Kewangan
                                  :</label>
                                <label class="col-form-label q-mb-none" style="margin-left: 10px">Nama Tajaan :</label>
                                <label class="col-form-label q-mb-none" style="margin-left: 10px">Jumlah Pendapatan (RM)
                                  :</label>
                              </q-item-section></q-item> -->
                            <div class="row">
                              <div class="col-4 q-px-xs">
                                <q-input :readonly="true" dense outlined class="bg-grey-4" label="Nama Agent"></q-input>
                              </div>
                              <div class="col-8 q-px-xs">
                                <q-input :readonly="true" dense label="Mr ALI"></q-input>
                              </div>
                              <div class="col-4 q-px-xs">
                                <q-input :readonly="true" dense outlined class="bg-grey-4" label="Emel Agent"></q-input>
                              </div>
                              <div class="col-8 q-px-xs">
                                <q-input :readonly="true" dense label="test@gmail.com"></q-input>
                              </div>
                            </div>
                            <hr />
                            <div class="row">
                              <div class="col-4 q-px-xs">
                                <q-input :readonly="true" dense outlined class="bg-grey-4"
                                  label="Sokongan Kewangan"></q-input>
                              </div>
                              <div class="col-8 q-px-xs">
                                <q-input :readonly="true" dense label="Biasisiwa"></q-input>
                              </div>
                              <div class="col-4 q-px-xs">
                                <q-input :readonly="true" dense outlined class="bg-grey-4"
                                  label="Jenis Biasiswa"></q-input>
                              </div>
                              <div class="col-8 q-px-xs">
                                <q-input :readonly="true" dense label="JPA"></q-input>
                              </div>
                              <!-- <div class="col-4 q-px-xs">
                                <q-input :readonly="true" dense outlined class="bg-grey-4" label="Kertas Kerja
                                  Penyelidikan"></q-input>
                              </div>
                              <div class="col-8 q-px-xs">
                                <q-input :readonly="true" dense label=""></q-input>
                              </div>
                              <div class="col-4 q-px-xs">
                                <q-input :readonly="true" dense outlined class="bg-grey-4"
                                  label="Resit Pembayaran"></q-input>
                              </div>
                              <div class="col-8 q-px-xs">
                                <q-input :readonly="true" dense label=""></q-input>
                              </div> -->
                            </div>
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
      <!-- Dialogs -->
      <q-dialog v-model="updateTindakanModal">
        <updateTindakan />
      </q-dialog>
      <q-dialog v-model="new_customer">
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
</template>

<script>
import { defineComponent, onMounted, ref, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import updateTindakan from "./EditPermohonan.vue";
import { useRetPermohonanStore } from "src/stores/getmohon";

export default defineComponent({
  name: "DetailPermohonan",
  components: {
    updateTindakan,
  },

  setup() {
    const route = useRoute(); // Access route parameters
    const router = useRouter(); // For navigation if needed
    const storeGetMohon = useRetPermohonanStore(); // Pinia store

    const Details = computed(() => storeGetMohon.Details); // Computed value from the store

    const updateTindakanModal = ref(false);
    const new_customer = ref(false);

    const form = ref({
      singleDropdown: "",
    });

    const singleDropdownOptions = [
      "Permohonan Diluluskan",
      "Permohonan Tidak Diluluskan",
      "Pindah Fakulti",
    ];

    // Function to fetch data based on route ID
    const fetchDetails = async () => {
      const id = route.params.p001nokp; // Get the ID from the route
      if (id) {
        try {
          await storeGetMohon.fetchDetail(id); // Fetch details using Pinia store action
          console.log("Details fetched successfully", storeGetMohon.Details);
        } catch (error) {
          console.error("Error fetching details:", error);
        }
      } else {
        console.warn("No ID found in route params.");
      }
    };

    // Fetch data when the component is mounted
    onMounted(() => {
      fetchDetails();
    });

    return {
      tab: ref("mails"),
      verticalTab: "contact", // Set a valid default tab name
      horizontalTab: "", // Set a valid default tab name
      splitterModel: 20,

      updateTindakanModal,
      updateRow: () => (updateTindakanModal.value = true),
      updateRow1: () => (new_customer.value = true),
      singleDropdownOptions,
      form,
      new_customer,
      Details,
    };
  },
});
</script>

<style>
.card_style {
  border-radius: 12px;
}

.image-center {
  text-align: center;
}

.card-title {
  font-size: 16px;
  margin: 0 0 7px 0;
  font-weight: 500;
}


/* .card-title {
  font-size: 16px;
  margin: 0 0 7px 0;
  font-weight: 500;
} */



/* .shadow_custom {
  box-shadow: 0 2px 6px #4359711f !important;
} */

/* .q-col-gutter-y-lg,
.q-col-gutter-lg {
  margin-top: -24px;
}

.q-col-gutter-x-lg,
.q-col-gutter-lg {
  margin-left: -24px;
} */

/* .row,
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
} */
</style>
