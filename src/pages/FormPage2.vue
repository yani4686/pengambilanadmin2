<template>
  <q-page>
    <q-form @submit="submitForm">
      <!------------------- Section A - First Card Horizontal Form (one-column) ---------------------->
      <div class="row">
        <q-card class="col-12">
          <q-card-section class="card-title"
            >Horizontal Form
            <span style="color: crimson; font-size: small"
              >(one-column)</span
            ></q-card-section
          >

          <!-- Input type text -->
          <div class="row q-gutter-none q-mt-lg">
            <!-- <div class="col-12 col-sm-3">
              <label class="col-form-label q-mb-none" style="margin-left: 20px"
                >Input Text <span style="color: red">*</span></label
              >
            </div> -->
            <div class="col-12 col-sm-9">
              <q-input
                color="blue"
                v-model="form.inputtext1"
                label="Input Text"
                outlined
                dense
                :rules="[(val) => !!val || 'This is required']"
                required
                style="margin: 0 12px"
              />
            </div>
          </div>

          <!-- Input type Textarea -->
          <div class="row q-gutter-none">
            <!-- <div class="col-12 col-sm-3">
              <label class="col-form-label q-mb-none" style="margin-left: 20px"
                >Input Textarea<span style="color: red">*</span></label
              >
            </div> -->

            <div class="col-12 col-sm-9">
              <q-input
                color="blue"
                type="textarea"
                v-model="form.inputtextarea"
                label="Input Textarea"
                outlined
                dense
                :rules="[(val) => !!val || 'Name is required']"
                style="margin: 0 12px"
              />
            </div>
          </div>
          <!------ Text Editor WYSIWYG ------------->
          <div class="row q-gutter-none">
            <!-- <div class="col-12 col-sm-3">
              <label class="col-form-label q-mb-none" style="margin-left: 20px"
                >Input Text Editor<span style="color: red">*</span></label
              >
            </div> -->
            <div class="col-12 col-sm-9 q-mb-lg">
              <q-editor v-model="editor" style="margin: 0 12px" />
            </div>
          </div>

          <!-- Dropdown Single select -->
          <div class="row q-gutter-none">
            <!-- <div class="col-12 col-sm-3">
              <label class="col-form-label q-mb-none" style="margin-left: 20px"
                >Single Dropdown<span style="color: red">*</span></label
              >
            </div> -->
            <div class="col-12 col-sm-9">
              <q-select
                color="blue"
                v-model="form.singleDropdown"
                :options="singleDropdownOptions"
                label="Single Dropdown"
                outlined
                dense
                :rules="[(val) => !!val || 'Program is required']"
                required
                style="margin: 0 12px"
              />
            </div>
          </div>

          <!-- Dropdown Multiple select -->
          <div class="row q-gutter-none">
            <!-- <div class="col-12 col-sm-3">
              <label class="col-form-label" style="margin-left: 20px"
                >Multiple Dropdown<span style="color: red">*</span></label
              >
            </div> -->
            <div class="col-12 col-sm-9">
              <q-select
                color="blue"
                v-model="form.multiplechoice"
                :options="multipleDropdownOption"
                label="Multiple Dropdown"
                outlined
                dense
                multiple
                :rules="[(val) => !!val || 'Program is required']"
                required
                style="margin: 0 12px"
                clearable
              />
            </div>
          </div>

          <!-- Filtering Dropdown -->
          <div class="row">
            <!-- <div class="col-12 col-sm-3">
              <label class="col-form-label" style="margin-left: 20px"
                >Filtering Dropdown<span style="color: red">*</span></label
              >
            </div> -->

            <div class="col-12 col-sm-9">
              <q-select
                color="blue"
                outlined
                dense
                :rules="[(val) => !!val || 'This is required']"
                required
                style="margin: 0 12px"
                v-model="model"
                use-input
                input-debounce="0"
                label="Filtering Dropdown"
                :options="options"
                @filter="filterFn"
                clearable
              />
            </div>
          </div>

          <!-- Date -->
          <div class="row">
            <div class="col-12 col-sm-3">
              <label class="col-form-label" style="margin-left: 20px"
                >Date<span style="color: red">*</span></label
              >
            </div>

            <div class="col-12 col-sm-9">
              <q-input
                v-model="form.date"
                outlined
                dense
                label="dd-mm-yyyy"
                style="margin: 0 12px; margin-bottom: auto"
                @blur="formatDate(form.date)"
              />
              <!-- <q-input v-model="date" filled type="date" hint="Native date" /> -->
              <!-- <template v-slot:>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy
                      cover
                      transition-show="scale"
                      transition-hide="scale"
                    >
                      <q-date v-model="form.date" @input="formatDate">
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
              </q-input> -->
            </div>
          </div>

          <!-- radio button -->
          <div class="row q-gutter-none">
            <div class="col-sm-3">
              <label class="col-form-label" style="margin-left: 20px"
                >Radio Button<span style="color: red">*</span></label
              >
            </div>
            <div class="col-12 col-sm-9">
              <q-radio
                v-model="form.radioButton"
                label="Option 1"
                val="opt1"
                name="radioButton"
                size="xs"
                style="margin-left: 5px"
              />
              <q-radio
                v-model="form.radioButton"
                label="Option 2"
                val="opt2"
                name="radioButton"
                size="xs"
                style="margin-left: 20px"
              />
              <q-radio
                v-model="form.radioButton"
                label="Option 3"
                val="opt3"
                name="radioButton"
                size="xs"
                style="margin-left: 20px"
              />
            </div>
          </div>

          <!-- checkbox button -->
          <div class="row q-pt-lg">
            <div class="col-sm-3">
              <label class="col-form-label" style="margin-left: 20px"
                >Checkbox Button<span style="color: red">*</span></label
              >
            </div>
            <div class="col-12 col-sm-9">
              <q-checkbox
                v-model="form.CheckboxButton"
                label="Option A"
                val="optA"
                name="CheckboxButton"
                size="xs"
                style="margin-left: 5px"
              />
              <q-checkbox
                v-model="form.CheckboxButton"
                label="Option B"
                val="optB"
                name="CheckboxButton"
                size="xs"
                style="margin-left: 20px"
              />
              <q-checkbox
                v-model="form.CheckboxButton"
                label="Option C"
                val="optC"
                name="CheckboxButton"
                size="xs"
                style="margin-left: 20px"
              />
            </div>
          </div>
          <br />
          <hr />
          <br />
          <!-- Date -->
          <div class="row">
            <div class="col-12 col-sm-3">
              <label class="col-form-label" style="margin-left: 20px"
                >Upload Files<span style="color: red">*</span></label
              >
            </div>

            <div class="col-12 col-sm-9">
              <q-file
                ref="step2Ref"
                color="blue"
                v-model="form.files"
                outlined
                multiple
                dense
                :rules="[(val) => !!val || 'Evidence is required']"
                required
                style="margin: 0 12px"
              />
            </div>
          </div>
          <!-- Submit button -->
          <q-card-actions align="right" class="submit-button">
            <q-btn
              label="Submit"
              type="submit"
              color="primary"
              class="q-mr-sm submitbutton"
              size="md"
              @click="Submit()"
            />
            <!-- <q-btn label="Submit" type="submit" color="primary" /> -->
          </q-card-actions>
        </q-card>
      </div>
    </q-form>
  </q-page>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const editor = ref([]);
    const stringOptions = ["Google", "Facebook", "Twitter", "Apple", "Oracle"];

    const color = ref("cyan");
    const form = ref({
      inputtext1: "",
      inputtextarea: "",
      singleDropdown: "",
      multiplechoice: [],
      date: "",
      radioButton: "",
      CheckboxButton: "",
      inputtext2: "",
      coreStrategic: "",
      strategicExecution: "",
      initiativeName: "",
      balancedScoreCard: "",
      expectedOutcome: "",
      quarter: "",
      selection: "",
      step: 1,
      step1: "",
      step2: "",
      step3: "",
    });

    const model = ref(null);
    const options = ref([]);
    const files = ref(null);
    const singleDropdownOptions = ["Option 1", "Option 2", "Option 3"];
    const multipleDropdownOption = ["Card 1", "Card 2", "Card 3"];
    const dataOptions = [
      "Form Checkbox checked",
      "Toggle this switch element",
      "Small Size Switch",
      "Form Large input",
      "Form Radios Right",
      "Horizontal form",
    ];
    const filteredDataOptions = ref([
      "Google",
      "Facebook",
      "Twitter",
      "Apple",
      "Oracle",
    ]);

    const filterFn = (val, update) => {
      if (val === "") {
        update(() => {
          options.value = stringOptions; // Restore full options when input is empty
        });
        return;
      }

      const needle = val.toLowerCase();
      update(() => {
        options.value = stringOptions.filter((v) =>
          v.toLowerCase().includes(needle)
        );
      });
    };

    const onContinueStep = () => {
      switch (form.value.step) {
        case 1:
          // Add validation logic here
          form.value.step++;
          break;
        case 2:
          form.value.step++;
          break;
        case 3:
          alert(
            `Form submitted with values: ${form.value.step1} - ${form.value.step2} - ${form.value.step3}`
          );
          break;
      }
    };

    const onBackStep = () => {
      if (form.value.step > 1) {
        form.value.step--;
      }
    };

    const submitForm = () => {
      // Handle form submission
      console.log("Form Submitted", form.value);
    };

    const formatDate = (date) => {
      // Convert to a Date object if not already
      const formattedDate = new Date(date);

      // Format the date to "day-month-year" (dd-mm-yyyy)
      const day = String(formattedDate.getDate()).padStart(2, "0");
      const month = String(formattedDate.getMonth() + 1).padStart(2, "0"); // getMonth() returns 0-11
      const year = formattedDate.getFullYear();

      // Update the model with the formatted date
      form.value.date = `${day}-${month}-${year}`;
    };
    return {
      color,
      form,
      editor,
      model,
      options,
      filterFn,
      files,
      singleDropdownOptions,
      multipleDropdownOption,
      dataOptions,
      filteredDataOptions,
      onContinueStep,
      onBackStep,
      submitForm,
      formatDate,
    };
  },
};
</script>
<style>
body {
  font-family: roboto;
}

.card-title {
  font-size: 16px;
  margin: 0 0 7px 0;
  font-weight: 500;
}
hr {
  margin-left: 14px;
  margin-right: 14px;
}
.submitbutton {
  font-size: 12px;
}
.submit-button {
  padding-bottom: 30px;
  margin-right: 5px;
}

/* .q-field--auto-height.q-field--dense .q-field__control,
.q-field--auto-height.q-field--dense .q-field__native {
  min-height: 30px;
} */
</style>
