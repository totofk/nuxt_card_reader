<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset">
      <div class="row justify-content-between">
        <b-form-group class="col-md-3 col-4" label="เพศ">
          <div class="d-flex">
            <b-form-radio
              v-model="form.gender"
              class="mr-3"
              name="gender"
              value="male"
              >ชาย</b-form-radio
            >
            <b-form-radio v-model="form.gender" name="gender" value="female"
              >หญิง</b-form-radio
            >
          </div>
        </b-form-group>

        <b-form-group
          id="input-group-citizenId"
          class="col-md-3 col-8"
          label="เลขบัตรประชาชน:"
          label-for="input-citizenId"
        >
          <b-form-input
            id="input-citizenId"
            v-model="form.citizenId"
            type="email"
            required
            placeholder="เลขบัตรประชาชน"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-first-name"
          class="col-md-3"
          label="ชื่อ"
          label-for="input-first-name"
        >
          <b-form-input
            id="input-first-name"
            v-model="form.firstName"
            required
            placeholder="ชื่อ"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-last-name"
          class="col-md-3"
          label="นามสกุล"
          label-for="input-last-name"
        >
          <b-form-input
            id="input-last-name"
            v-model="form.lastName"
            required
            placeholder="นามสกุล"
          ></b-form-input>
        </b-form-group>
      </div>

      <b-form-group label="วันเกิด">
        <div class="d-flex">
          <b-form-select
            v-model="form.birth_date"
            class="mr-2"
            :options="selectDate.date"
            required
          ></b-form-select>
          <b-form-select
            v-model="form.birth_month"
            class="mr-2"
            :options="selectDate.month"
            required
          ></b-form-select>
          <b-form-input
            id="input-birth-year"
            v-model="form.birth_year"
            required
            placeholder="ปี"
          ></b-form-input>
        </div>
      </b-form-group>

      <b-form-group
        id="input-group-address"
        label="ที่อยู่"
        label-for="input-address"
      >
        <b-form-input
          id="input-address"
          v-model="form.address"
          required
          placeholder="ที่อยู่ปัจจุบัน"
        ></b-form-input>
      </b-form-group>

      <div class="text-center">
        <b-button class="mr-3" type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </div>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'RegisterForm',
  data() {
    return {
      form: {
        gender: '',
        citizenId: '',
        firstName: '',
        lastName: '',
        birth_date: '',
        birth_month: '',
        birth_year: '',
        address: '',
      },
      selectDate: {
        date: [
          { text: 'วัน', value: null },
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31,
        ],
        month: [
          { text: 'เดือน', value: null },
          'มกราคม',
          'กุมภาพันธ์',
          'มีนาคม',
          'เมษายน',
          'พฤษภาคม',
          'มิถุนายน',
          'กรกฎาคม',
          'สิงหาคม',
          'กันยายน',
          'ตุลาคม',
          'พฤศจิกายน',
          'ธันวาคม',
        ],
      },
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset(evt) {
      evt.preventDefault()
      // Reset our form values
      this.form.gender = ''
      this.form.citizenId = ''
      this.form.firstName = ''
      this.form.lastName = ''
      this.form.birth_date = null
      this.form.birth_month = null
      this.form.birth_year = ''
      this.form.address = ''
    },
  },
}
</script>
