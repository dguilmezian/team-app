<template>
  <div class="card col-sm-6 col-md-12">
    <div class="card-body">
      <div class="row">
        <div class="col-sm-6 col-md-12">
          <div class="d-flex align-items-center">
            <img
                :src="user.picture"
                class="rounded-circle button-image"
                style="width: 50px; height: 50px"
            />
            <div class="flex-grow-1">
              <h3 class="d-inline-block" style="padding-left: 20px; text-transform: capitalize;"
              >{{ user.title }}. {{ user.firstName }} {{ user.lastName }}</h3
              >
            </div>
            <router-link :to="`/`">
              <button type="button" class="btn btn-primary">Back</button>
            </router-link>
          </div>

        </div>
        <div class="card col-sm-6 col-md-12" style="margin-top:10px">
          <div class="card-body">
            <div class="row">
              <div class="col-sm-6 col-md-12">
                <p style="text-transform: capitalize"><b>Gender</b>: {{ user.gender }}</p>
                <p><b>E-Mail:</b> {{ user.email }}</p>
                <p><b>Birthdate:</b> {{ dateFormat(user.dateOfBirth) }}</p>
                <p><b>Phone Number:</b> {{ user.phone }}</p>
                <p><b>Address:</b> {{ user.location.street }}, {{ user.location.city }}, {{ user.location.state }}.
                  {{ user.location.country }}</p>
                <p><b>Register Date:</b> {{ dateFormat(user.registerDate) }}</p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  props: {},
  data: function() {
    return {
      user: {
        'title': '',
        'firstName': '',
        'lastName': '',
        'gender': '',
        'dateOfBirth': '',
        'location': {
          'street': '',
          'city': '',
          'state': '',
          'country': ''
        },
        'registerDate': ''
      }
    }
  },
  methods: {
    getUser() {
      axios.get('https://dummyapi.io/data/v1/user/' + this.$route.params.id, {
            headers: {
              'app-id': '64794a81ecf7af8e5e0bd8c9'
            }
          }
      ).then((response) => {
        this.user = response.data
      })
      //this.user = this.$router.query.user
    },
    dateFormat(date) {
      const dateObj = new Date(date)
      const day = dateObj.getDate()
      const month = dateObj.getMonth() + 1 // Los meses en JavaScript comienzan desde 0, por lo que sumamos 1
      const year = dateObj.getFullYear()

      return `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`
    }
  },
  mounted() {
    this.getUser()
  }
}
</script>

<style>

</style>
