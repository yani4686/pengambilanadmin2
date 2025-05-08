<template>
  <q-page class="q-pa-md bg-grey-2 flex-center">
    <q-page-container class="q-pa-md">
      <div id="idFrmSummary">
        <q-card flat bordered class="q-pa-lg">
          <!-- 🔵 Header -->
          <q-card-section class="bg-primary text-white q-mb-md">
            <div class="row justify-between items-center">
              <div class="text-h6">Summary & Print</div>
              <q-btn flat round dense icon="download" @click="printPage" />
            </div>
          </q-card-section>
          <!-- 📷 Passport-sized Picture -->
          <div class="row justify-center q-mb-md">
            <div class="text-center">
              <div class="text-subtitle2 text-bold q-mb-xs">
                Passport-sized Picture
              </div>
              <img
                :src="'http://localhost/pascav2/public/uploads/' + uppic"
                alt="Passport Picture"
                style="max-width: 150px; height: auto; display: block"
              />
              <!-- <q-img
                :src="urlpic"
                fit="contain"
                style="max-width: 150px; height: auto"
                spinner-color="primary"
              /> -->
            </div>
          </div>
          <!-- Sections -->
          <q-card-section>
            <!-- Profile Information -->
            <!-- <q-banner class="text-h6 text-bold q-mb-sm"
            >Profile Information</q-banner
          >
          <q-list bordered separator>
            <q-item v-for="(value, key) in profileInfo" :key="key">
              <q-item-section>
                <q-item-label>{{ key }}</q-item-label>
                <q-item-label caption>{{ value }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list> -->

            <q-card-section>
              <div class="text-h6 text-bold q-mb-sm">Profile Information</div>

              <div class="row q-col-gutter-md q-mb-sm">
                <div class="col-12 col-md-6">
                  <div class="text-grey-8 text-subtitle2">Name:</div>
                  <div class="text-body1">{{ nama }}</div>
                </div>

                <div class="col-12 col-md-6">
                  <div class="text-grey-8 text-subtitle2">IC/Passport No.:</div>
                  <div class="text-body1">
                    {{ nokp }}
                  </div>
                </div>

                <div class="col-12 col-md-6">
                  <div class="text-grey-8 text-subtitle2">Date of Birth:</div>
                  <div class="text-body1">{{ tkhlahir }}</div>
                </div>

                <div class="col-12 col-md-6">
                  <div class="text-grey-8 text-subtitle2">Email:</div>
                  <div class="text-body1">{{ email }}</div>
                </div>
                <!-- <q-separator spaced /> -->
              </div>
              <div class="row q-col-gutter-md q-mb-sm">
                <div class="col-12 col-md-6">
                  <div class="text-bold">Corresponding Address</div>
                  <!-- <div class="text-grey-8 text-subtitle2">Email:</div> -->
                  <div class="text-body1">
                    {{ almtsemasa }}
                  </div>
                </div>

                <div class="col-12 col-md-6">
                  <div class="text-grey-8 text-subtitle2">Contact No:</div>
                  <div class="row items-start q-gutter-md">
                    <div>
                      <span class="text-bold">Tel No:</span> {{ telRS }}
                    </div>
                    <div>
                      <span class="text-bold">Mobile No:</span> {{ telHPS }}
                    </div>
                    <div><span class="text-bold">Off No:</span> {{ offS }}</div>
                    <div><span class="text-bold">Fax No:</span> {{ faxS }}</div>
                  </div>
                </div>

                <!-- <q-separator spaced /> -->
                <div class="col-12 col-md-6">
                  <div class="text-bold">Home Address</div>
                  <!-- <div class="text-grey-8 text-subtitle2">Email:</div> -->
                  <div class="text-body1">
                    {{ almtT }}
                  </div>
                </div>

                <div class="col-12 col-md-6">
                  <div class="text-grey-8 text-subtitle2">Contact No:</div>
                  <div class="row items-start q-gutter-md">
                    <div><span class="text-bold">Tel No:</span>{{ telRT }}</div>
                    <div>
                      <span class="text-bold">Mobile No:</span>{{ telHPT }}
                    </div>
                    <div><span class="text-bold">Fax No:</span>{{ faxT }}</div>
                  </div>
                </div>

                <div class="col-12 col-md-6">
                  <div class="text-grey-8 text-subtitle2">
                    Nationality Status:
                  </div>
                  <div class="text-body1">{{ statwarga }}</div>
                </div>

                <div class="col-12 col-md-6">
                  <div class="text-grey-8 text-subtitle2">Nationality:</div>
                  <div class="text-body1">{{ namanegara }}</div>
                </div>

                <div class="col-12 col-md-6">
                  <div class="text-grey-8 text-subtitle2">Disability:</div>
                  <div class="text-body1">{{ statoku }}</div>
                </div>
              </div>
            </q-card-section>

            <q-separator class="q-my-md" />

            <q-card-section>
              <div class="text-h6 text-bold q-mb-sm">Application Details</div>

              <div class="row q-col-gutter-md q-mb-sm">
                <div class="col-12 col-md-6">
                  <div class="text-grey-8 text-subtitle2">Mode Of Study:</div>
                  <div class="text-body1">{{ modest }}</div>
                </div>

                <div class="col-12 col-md-6">
                  <div class="text-grey-8 text-subtitle2">Type Of Study:</div>
                  <div class="text-body1">{{ kaedah }}</div>
                </div>
                <div class="col-12 col-md-6">
                  <div class="text-grey-8 text-subtitle2">Programme:</div>
                  <div class="text-body1">
                    {{ namaprogram }} ({{ necprogram }}) ({{ kdprogram }})
                  </div>
                </div>
                <div class="col-12 col-md-6">
                  <div class="text-grey-8 text-subtitle2">Faculty:</div>
                  <div class="text-body1">{{ fakultiprogram }}</div>
                </div>
              </div>
            </q-card-section>
            <q-separator class="q-my-md" />

            <q-card-section>
              <div class="text-h6 text-bold q-mb-sm">Academic Details</div>

              <div class="row q-col-gutter-md q-mb-sm">
                <div class="col-12 col-md-6">
                  <div class="text-grey-8 text-subtitle2">
                    Highest Education:
                  </div>
                  <div class="text-body1">{{ akadtggi }}</div>
                </div>

                <div class="col-12 col-md-6">
                  <div class="text-grey-8 text-subtitle2">
                    Awarding University (Bachelor/equivalent):
                  </div>
                  <div class="text-body1">{{ unilama }}</div>
                </div>
                <div class="col-12 col-md-6">
                  <div class="text-grey-8 text-subtitle2">Class/CGPA:</div>
                  <div class="text-body1">
                    {{ cgpa }}
                  </div>
                </div>
                <div class="col-12 col-md-6">
                  <div class="text-grey-8 text-subtitle2">
                    Country Awarding:
                  </div>
                  <div class="text-body1">{{ negunilama }}</div>
                </div>
                <div class="col-12 col-md-6">
                  <div class="text-grey-8 text-subtitle2">
                    Awarding University (Master /equivalent):
                  </div>
                  <div class="text-body1">{{ unilama2 }}</div>
                </div>
                <div class="col-12 col-md-6">
                  <div class="text-grey-8 text-subtitle2">Class/CGPA:</div>
                  <div class="text-body1">
                    {{ cgpa2 }}
                  </div>
                </div>
                <div class="col-12 col-md-6">
                  <div class="text-grey-8 text-subtitle2">
                    Country Awarding:
                  </div>
                  <div class="text-body1">{{ kdneguni2 }}</div>
                </div>
              </div>
              <div class="row q-col-gutter-md q-mb-sm">
                <div class="col-12 col-md-6">
                  <div class="text-grey-8 text-subtitle2">
                    Proposed Research Title/Area:
                  </div>
                  <div class="text-body1">{{ tajuk }}</div>
                </div>
                <div class="col-12 col-md-6">
                  <div class="text-grey-8 text-subtitle2">
                    Proposed Supervisor:
                  </div>
                  <div class="text-body1">{{ sv }}</div>
                </div>
                <div class="col-12 col-md-6">
                  <div class="text-grey-8 text-subtitle2">
                    Portfolio Document:
                  </div>
                  <div class="text-body1"></div>
                </div>
              </div>
            </q-card-section>
            <!-- <q-banner class="text-h6 text-bold q-mb-sm"
            >Application Details</q-banner
          >
          <q-list bordered separator>
            <q-item v-for="(value, key) in applicationDetails" :key="key">
              <q-item-section>
                <q-item-label>{{ key }}</q-item-label>
                <q-item-label caption>{{ value }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>

          <q-separator class="q-my-md" />
          <q-banner class="text-h6 text-bold q-mb-sm"
            >Academic Qualification</q-banner
          >
          <q-list bordered separator>
            <q-item v-for="(value, key) in academicQualification" :key="key">
              <q-item-section>
                <q-item-label>{{ key }}</q-item-label>
                <q-item-label caption>{{ value }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list> -->

            <q-separator class="q-my-md" />

            <q-card-section>
              <div class="text-h6 text-bold q-mb-sm">
                English Language Proficiency
              </div>

              <div class="row q-col-gutter-md q-mb-sm">
                <div class="col-12 col-md-6">
                  <div class="text-grey-8 text-subtitle2">Exam Type:</div>
                  <div class="text-body1">{{ bidesc }}</div>
                </div>

                <div class="col-12 col-md-6">
                  <div class="text-grey-8 text-subtitle2">Result :</div>
                  <div class="text-body1">{{ result }}</div>
                </div>
                <div class="col-12 col-md-6">
                  <div class="text-grey-8 text-subtitle2">
                    Registration No./Candidate No.:
                  </div>
                  <div class="text-body1">
                    {{ noregbi }}
                  </div>
                </div>
                <div class="col-12 col-md-6">
                  <div class="text-grey-8 text-subtitle2">
                    Date of Examination:
                  </div>
                  <div class="text-body1">{{ tkhexam }}</div>
                </div>
              </div>
            </q-card-section>

            <!-- <q-banner class="text-h6 text-bold q-mb-sm"
            >English Language Proficiency</q-banner
          >
          <q-list bordered separator>
            <q-item v-for="(value, key) in englishProficiency" :key="key">
              <q-item-section>
                <q-item-label>{{ key }}</q-item-label>
                <q-item-label caption>{{ value }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list> -->

            <q-separator class="q-my-md" />

            <q-card-section>
              <div class="text-h6 text-bold q-mb-sm">
                Additional Information
              </div>

              <div class="row q-col-gutter-md q-mb-sm">
                <div class="col-12 col-md-6">
                  <div class="text-grey-8 text-subtitle2">Agent Name:</div>
                  <div class="text-body1">{{ agentname }}</div>
                </div>

                <div class="col-12 col-md-6">
                  <div class="text-grey-8 text-subtitle2">Agent Email :</div>
                  <div class="text-body1">{{ agentemail }}</div>
                </div>
                <div class="col-12 col-md-6">
                  <div class="text-grey-8 text-subtitle2">
                    Type Of Sponsorship:
                  </div>
                  <div class="text-body1">
                    {{ namapenaja }}
                  </div>
                </div>
                <div class="col-12 col-md-6">
                  <div class="text-grey-8 text-subtitle2">
                    HouseHold Income:
                  </div>
                  <div class="text-body1">{{ income }}</div>
                </div>
              </div>
            </q-card-section>
            <!-- <q-banner class="text-h6 text-bold q-mb-sm">Additional</q-banner>
          <q-list bordered separator>
            <q-item v-for="(value, key) in additionalInfo" :key="key">
              <q-item-section>
                <q-item-label>{{ key }}</q-item-label>
                <q-item-label caption>{{ value }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list> -->

            <q-separator class="q-my-md" />

            <q-card-section>
              <div class="text-h6 text-bold q-mb-sm">Status Submission</div>

              <div class="row q-col-gutter-md q-mb-sm">
                <div class="col-12 col-md-6">
                  <div class="text-grey-8 text-subtitle2">
                    Application Type:
                  </div>
                  <div class="text-body1">{{ laluan }}</div>
                </div>

                <div class="col-12 col-md-6">
                  <div class="text-grey-8 text-subtitle2">
                    Approval of Program Changes :
                  </div>
                  <div class="text-body1">{{ transfer }}</div>
                </div>
              </div>
            </q-card-section>
            <!-- <q-banner class="text-h6 text-bold q-mb-sm">Submission</q-banner>
          <q-list bordered separator>
            <q-item v-for="(value, key) in submission" :key="key">
              <q-item-section>
                <q-item-label>{{ key }}</q-item-label>
                <q-item-label caption>{{ value }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list> -->
          </q-card-section>

          <!-- Print Button -->
          <q-card-section class="q-mt-md">
            <q-btn label="Print" color="primary" @click="printPage" />
          </q-card-section>
        </q-card>
      </div>
    </q-page-container>
  </q-page>
</template>

<script>
import { defineComponent, onMounted, ref, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useRetPermohonanStore } from "src/stores/getmohon";
//import jsPDF from "jspdf";
//import html2canvas from "html2canvas";

export default defineComponent({
  name: "SummaryPermohonan",
  setup() {
    const route = useRoute(); // Access route parameters
    //const router = useRouter(); // For navigation if needed
    const storeGetMohon = useRetPermohonanStore(); // Pinia store
    const setDetails = computed(() => {
      return storeGetMohon.Details;
    });
    const listprogram = computed(() => {
      return storeGetMohon.KodProgram;
    });

    const listnegara = computed(() => {
      return storeGetMohon.KodNegara;
    });

    const listtajaan = computed(() => {
      return storeGetMohon.KodTajaan;
    });

    const nama = ref("");
    const namaprogram = ref("");
    const nokp = ref("");
    const kodprogram = ref("");
    const kdprogram = ref("");
    const tkhlahir = ref(""); // Reactive variable for dynamic label or data
    const statwarga = ref(""); // Reactive variable for dynamic label or data
    const statoku = ref(""); // Reactive variable for dynamic label or data
    const almtsemasa = ref(""); // Reactive variable for dynamic label or data
    const telRS = ref(""); // Reactive variable for dynamic label or data
    const telHPS = ref(""); // Reactive variable for dynamic label or data
    const offS = ref(""); // Reactive variable for dynamic label or data
    const faxS = ref("");
    const almtT = ref("");
    const telRT = ref("");
    const telHPT = ref("");
    const faxT = ref(""); //
    const kaedah = ref(""); // Reactive variable for dynamic label or data
    const modest = ref(""); // Reactive variable for dynamic label or data
    const tajuk = ref(""); // Reactive variable for dynamic label or data
    const sv = ref(""); // Reactive variable for dynamic label or data
    const expr = ref(""); // Reactive variable for dynamic label or data
    const akadtggi = ref("");
    const unilama = ref("");
    const negunilama = ref("");
    const cgpa = ref("");
    const cgpa2 = ref("");
    const unilama2 = ref("");
    const kdneguni2 = ref("");
    const urlpic = ref("");
    const uppic = ref("");
    const laluan = ref("");
    const transfer = ref("");
    const transferval = ref("");
    const urlic = ref("");
    const urlcert = ref("");
    const urlpro = ref("");
    const urlbi = ref("");
    const urlresit = ref("");
    const urlexp = ref("");
    const email = ref("");
    const labelText = ref("");
    const nokpform = ref("");
    const statdesc = ref("");
    const cttnsah = ref("");
    const bidesc = ref("");
    const result = ref("");
    const tkhexam = ref("");
    const noregbi = ref("");
    const fakultiprogram = ref("");
    const program = ref("");
    const necprogram = ref("");
    const groupedPrograms = ref("");
    const facultyMap = ref("");
    const searchTerm = ref("");
    const term = ref("");
    const allPrograms = ref([]);
    const singleDropdownOptions = ref([]);
    const negara = ref("");
    const kdwarga = ref("");
    const namanegara = ref("");
    const agentemail = ref("");
    const agentname = ref("");
    const kdtaja = ref("");
    const income = ref("");
    const tajaan = ref("");
    const namapenaja = ref("");

    // Function to fetch data based on route ID
    const fetchDetails = async () => {
      const id = route.params.p001nokp; // Get the ID from the route
      if (id) {
        try {
          await storeGetMohon.fetchDetail(id); // Fetch details using Pinia store action
          nama.value = storeGetMohon.Details.p001nama || ""; // Example: bind the fetched name to the variable
          nokp.value = storeGetMohon.Details.p001nokp || ""; // Example: bind the fetched name to the variable
          //formData.value.nokpform = storeGetMohon.Details.p001nokp || ""; // Example: bind the fetched name to the variable
          tkhlahir.value = storeGetMohon.Details.p001tkhlahir || ""; // Example: bind the fetched name to the variable
          email.value = storeGetMohon.Details.p001email || "";
          statwarga.value = storeGetMohon.Details.ktrgnstatwarga || ""; // Example: bind the fetched name to the variable
          statoku.value = storeGetMohon.Details.z013aketerangan || ""; // Example: bind the fetched name to the variable
          almtsemasa.value = storeGetMohon.Details.almtsemasa || ""; // Example: bind the fetched name to the variable
          telRS.value = storeGetMohon.Details.p001notel || "";
          telHPS.value = storeGetMohon.Details.p001nohp || "";
          offS.value = storeGetMohon.Details.p001offno || "";
          faxS.value = storeGetMohon.Details.p001faxno || ""; // Example: bind the fetched name to the variable
          almtT.value = storeGetMohon.Details.almttetap || ""; // Example: bind the fetched name to the variable
          telRT.value = storeGetMohon.Details.p001notelt || "N/A";
          telHPT.value = storeGetMohon.Details.p001nohpt || "N/A";
          faxT.value = storeGetMohon.Details.p001faxnot || "N/A";
          kaedah.value = storeGetMohon.Details.kaedah || ""; // Example: bind the fetched name to the variable
          modest.value = storeGetMohon.Details.modebelajar || ""; // Example: bind the fetched name to the variable

          kdprogram.value = storeGetMohon.Details.p001kprog || "";
          //console.log("Looking for kdprogram:", kdprogram.value);
          const program = storeGetMohon.KodProgram.find(
            (item) => item.p020kprog === kdprogram.value
          );
          if (program) {
            // Display namaprogram if program is found
            namaprogram.value = program.p020namaprogbi || "";
            fakultiprogram.value = program.a019bi || "";
            necprogram.value = program.z054bnecdetail || "";
            console.log("Program found, necprogram:", necprogram.value);
          } else {
            // console.log("Program not found");
            namaprogram.value = ""; // Reset if not found
            fakultiprogram.value = ""; // Reset if not found
          }

          kdwarga.value = storeGetMohon.Details.p001kwarga || "";
          const negara = storeGetMohon.KodNegara.find(
            (item) => item.c028kod === kdwarga.value
          );
          if (negara) {
            namanegara.value = negara.c028keterangan || "";
            //  console.log("namanegara found, namanegara:", namanegara.value);
          } else {
            // console.log("Program not found");
            namanegara.value = ""; // Reset if not found
          }

          tajuk.value = storeGetMohon.Details.p001tajuk || ""; // Example: bind the fetched name to the variable
          sv.value = storeGetMohon.Details.p001penyelia || ""; // Example: bind the fetched name to the variable
          // expr.value = storeGetMohon.Details.p001bilexp || ""; // Example: bind the fetched name to the variable
          akadtggi.value = storeGetMohon.Details.akadtggi || ""; // Example: bind the fetched name to the variable
          unilama.value = storeGetMohon.Details.p001unilama || ""; // Example: bind the fetched name to the variable
          negunilama.value = storeGetMohon.Details.negunilama || "N/A"; // Example: bind the fetched name to the variable
          cgpa.value = storeGetMohon.Details.p001cgpa || ""; // Example: bind the fetched name to the variable
          cgpa2.value = storeGetMohon.Details.p001cgpa2 || "N/A"; // Example: bind the fetched name to the variable
          unilama2.value = storeGetMohon.Details.p001unilama2 || ""; // Example: bind the fetched name to the variable
          kdneguni2.value = storeGetMohon.Details.p001knegaracgpa2 || "N/A"; // Example: bind the fetched name to the variable
          urlpic.value = storeGetMohon.Details.urlgmbr || ""; // Example: bind the fetched name to the variable
          uppic.value = storeGetMohon.Details.p001upgambar || ""; // Example: bind the fetched name to the variable
          laluan.value = storeGetMohon.Details.laluan || ""; // Example: bind the fetched name to the variable
          transfer.value = storeGetMohon.Details.setujutransfer || ""; // Example: bind the fetched name to the variable
          // transferval.value = storeGetMohon.Details.p001setujutransfer || ""; // Example: bind the fetched name to the variable

          // ✅ Initialize `singleDropdownOptions` properly
          singleDropdownOptions.value = [
            { label: "Permohonan Diluluskan", value: "2" },
            { label: "Permohonan Tidak Diluluskan", value: "3" },
            { label: "Pindah Fakulti", value: "4" },
          ];

          // urlic.value = storeGetMohon.Details.urlnokppass || ""; // Example: bind the fetched name to the variable
          // urlcert.value = storeGetMohon.Details.urlcert || ""; // Example: bind the fetched name to the variable
          // urlpro.value = storeGetMohon.Details.urlpro || ""; // Example: bind the fetched name to the variable
          // urlbi.value = storeGetMohon.Details.urlupbi || ""; // Example: bind the fetched name to the variable
          // urlresit.value = storeGetMohon.Details.urlpro || ""; // Example: bind the fetched name to the variable
          // urlexp.value = storeGetMohon.Details.urlpro || ""; // Example: bind the fetched name to the variable
          // labelText.value = storeGetMohon.Details.label || "Default Label"; // Example: bind label text if available
          // statdesc.value = storeGetMohon.Details.statdesc || "N/A";
          // cttnsah.value = storeGetMohon.Details.p001catatan || "N/A";
          bidesc.value = storeGetMohon.Details.bidesc || "N/A";
          result.value = storeGetMohon.Details.p001muet || "N/A";
          tkhexam.value = storeGetMohon.Details.p001tkhexm || "N/A";
          noregbi.value = storeGetMohon.Details.p001noreg || "N/A";
          agentname.value = storeGetMohon.Details.p001ejenname || "N/A";
          agentemail.value = storeGetMohon.Details.p001ejenemail || "N/A";
          kdtaja.value = storeGetMohon.Details.p001kpenaja || "";
          const tajaan = storeGetMohon.KodTajaan.find(
            (item) => item.a010kpenaja === kdtaja.value
          );
          if (tajaan) {
            namapenaja.value = tajaan.a010penaja || "";
            //  console.log("namanegara found, namanegara:", namanegara.value);
          } else {
            // console.log("Program not found");
            namapenaja.value = ""; // Reset if not found
          }

          income.value = storeGetMohon.Details.p001amthouse || "N/A";
        } catch (error) {
          console.error("Error fetching details frontend:", error);
        }
      } else {
        console.warn("No ID found in route params.");
      }
    };

    async function onLoad() {
      try {
        //fetch tajaan
        await storeGetMohon.fetchKodPenaja();
        //namapenaja.value = storeGetMohon.KodTajaan[0].a010penaja || "";

        kdtaja.value = storeGetMohon.Details.p001kpenaja || "";
        if (kdtaja.value) {
          const matched = storeGetMohon.KodTajaan.find(
            (p) => p.a010kpenaja.trim() === kdtaja.value.trim()
          );
          if (matched) {
            namapenaja.value = matched.a010penaja || "";
          }
        }
        // Fetch data for kodnegara
        await storeGetMohon.fetchKodNegara();
        namanegara.value = storeGetMohon.KodNegara[0].c028keterangan || "";

        // Fetch data for kodprogram
        await storeGetMohon.fetchKodProgram();

        kdprogram.value = storeGetMohon.Details.p001kprog || "";

        if (kdprogram.value) {
          const matched = storeGetMohon.KodProgram.find(
            (p) => p.p020kprog.trim() === kdprogram.value.trim()
          );
          if (matched) {
            necprogram.value = matched.z054bnecdetail || "";
            namaprogram.value = matched.p020namaprogbi || "";
            fakultiprogram.value = matched.a019bi || "";
          }
        }

        //display on label
        //namaprogram.value = storeGetMohon.KodProgram[0].p020namaprogbi || "";
        // fakultiprogram.value = storeGetMohon.KodProgram[0].a019bi || "";
        //necprogram.value = storeGetMohon.KodProgram[0].z054bnecdetail || "";
        // console.log(
        //   "namaprogram onload fetched successfully:",
        //   necprogram.value
        // );

        // Group programs by faculty
        // const groupedPrograms = [];
        // const facultyMap = new Map();

        // storeGetMohon.KodProgram.forEach((program) => {
        //   const faculty = program.a019bi; // Faculty Name
        //   if (!facultyMap.has(faculty)) {
        //     facultyMap.set(faculty, {
        //       label: faculty.toUpperCase(), // Faculty Title (Uppercase for header style)
        //       disable: true, // Makes it a non-selectable header
        //     });
        //     groupedPrograms.push(facultyMap.get(faculty));
        //   }

        //   groupedPrograms.push({
        //     label: program.p020namaprogbi + " (" + program.z054bnecdetail + ")", // Program Name
        //     value: program.p020kprog, // Unique identifier
        //     faculty: faculty,
        //   });
        // });

        // programOptions.value = groupedPrograms;
        // allPrograms.value = groupedPrograms;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    // const imageReady = ref(false);

    // const printPage = () => {
    //   // if (!imageReady.value) {
    //   //   alert("Image not fully loaded yet.");
    //   //   return;
    //   // }

    //   const element = document.getElementById("idFrmSummary");

    //   html2canvas(element, {
    //     scale: 2,
    //     useCORS: true,
    //   }).then((canvas) => {
    //     const imgData = canvas.toDataURL("image/png");
    //     const pdf = new jsPDF("p", "mm", "a4");
    //     const imgWidth = 210;
    //     const imgHeight = (canvas.height * imgWidth) / canvas.width;

    //     pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
    //     pdf.save("Summary_Application.pdf");
    //   });
    // };

    // Fetch data when the component is mounted
    onMounted(() => {
      fetchDetails();
      onLoad();
    });

    return {
      tajaan,
      namapenaja,
      // printPage,
      // imageReady,
      agentemail,
      agentname,
      income,
      kdtaja,
      noregbi,
      result,
      tkhexam,
      bidesc,
      namanegara,
      kdwarga,
      negara,
      email,
      singleDropdownOptions,
      tkhlahir,
      statwarga,
      statoku,
      almtsemasa,
      telRS,
      telHPS,
      offS,
      faxS,
      almtT,
      telRT,
      telHPT,
      faxT,
      kaedah,
      modest,
      tajuk,
      sv,
      expr,
      akadtggi,
      unilama,
      negunilama,
      cgpa,
      cgpa2,
      unilama2,
      kdneguni2,
      urlpic,
      uppic,
      laluan,
      transfer,
      transferval,
      urlic,
      urlcert,
      urlpro,
      urlbi,
      urlresit,
      urlexp,
      labelText,
      statdesc,
      cttnsah,
      fakultiprogram,
      program,
      necprogram,
      groupedPrograms,
      facultyMap,
      kodprogram,
      kdprogram,
      namaprogram,
      nokp,
      nama,
      listprogram,
      listnegara,
      listtajaan,
      setDetails,
    };
  },
  methods: {
    // printPage() {
    //   const doc = new jsPDF("p", "mm", "a4");
    //   const element = document.getElementById("idFrmSummary");

    //   if (!element) {
    //     console.error("Element with ID 'idFrmSummary' not found.");
    //     return;
    //   }

    //   html2canvas(element, {
    //     scale: 2,
    //     useCORS: true,
    //   }).then((canvas) => {
    //     const imgData = canvas.toDataURL("image/png");
    //     const imgWidth = 210; // A4 width
    //     const imgHeight = (canvas.height * imgWidth) / canvas.width;

    //     doc.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
    //     doc.save("Summary_Application.pdf");
    //   });
    // },
    printPage() {
      window.print();
    },
  },
});
</script>
