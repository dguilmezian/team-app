<template>
  <div class="card col-sm-6 col-md-12">
    <div class="card-body">
      <div class="row">
        <div class="col-sm-6 col-md-12">
          <div class="input-group col-sm-5">
            <input
                    type="text"
                    class="form-control rounded-pill"
                    placeholder="Buscar"
                    aria-label="Buscar"
                    aria-describedby="button-addon"
                    v-model="filter"
            />
            <button
                    class="btn btn-outline-secondary rounded-pill"
                    type="button"
                    id="button-addon"
                    @click="getUsers"
            >
              Buscar
            </button>
          </div>
          <div class="col-sm-6 col-md-12" style="padding-top: 10px">
            <div class="row">
              <template v-for="(user, index) in users">
                <div class="col-lg-4 col-md-6 col-12" style="margin-bottom: 10px">
                  <router-link :to="`/user/${user.id}`" query:{user}
                          class="btn btn-primary custom-button"
                          style="width: 100%"
                  >
                    <div class="d-flex align-items-center">
                      <img
                              :src="user.picture"
                              class="rounded-circle button-image"
                              style="width: 50px; height: 50px"
                      />
                      <div class="flex-grow-1">
                        <span class="d-inline-block text-truncate" style="max-width: 150px"
                        >{{ user.firstName }} {{ user.lastName }}</span
                        >
                      </div>
                      <i class="fas fa-arrow-right ml-2"></i>
                    </div>
                  </router-link>
                </div>
                <template v-if="(index + 1) % 3 === 0 && index + 1 !== users.length"></template>
              </template>
            </div>
            <div class="row"></div>
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
        users: [],
        filter: '',
        user:{}
      }
    },
    methods: {
      handleClick() {
      },
      getUsers() {
        axios
                .get('https://dummyapi.io/data/v1/user', {
                  headers: {
                    'app-id': '64794a81ecf7af8e5e0bd8c9'
                  }
                })
                .then((response) => {
                  this.users = response.data.data
                  if (this.filter) {
                    const filterLower = this.filter.toLowerCase()
                    console.log(filterLower)
                    this.users = this.users.filter((user) => {
                      const fullName = `${user.firstName} ${user.lastName}`.toLowerCase()
                      console.log(fullName.includes(filterLower))
                      return fullName.includes(filterLower)
                    })
                  }
                })

      },
    },
    mounted() {
      this.getUsers()
    }
  }
</script>
<style lang="scss"></style>
