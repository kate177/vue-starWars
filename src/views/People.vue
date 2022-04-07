<template>
  <section class="information-card">
    <Loader v-if="loading" />
    <div class="information-card__list">
      <ul class="information-card__name">
        <li
          class="information-card__info"
          v-for="(value, idx) in people"
          :key="value.name"
          @click="onclickPerson(idx)"
        >
          {{ value.name }}
        </li>
      </ul>
    </div>
    <PeopleInfo :person="person" :id="id" v-if="person" />
  </section>
</template>

<script>
import { peopleService } from "@/services/people.js";
import Loader from "@/components/Loader.vue";
import PeopleInfo from "../components/PeopleInfo.vue";

export default {
  data() {
    return { people: [], person: null, id: 0 };
  },
  components: {
    Loader,
    PeopleInfo,
  },
  methods: {
    onclickPerson(idx) {
      this.person = this.people[idx];
      this.id = idx;
    },
  },
  async created() {
    try {
      this.loading = true;
      const response = await peopleService().getPeople();
      this.loading = false;
      this.people = response.results;
      this.person = response.results[0];
    } catch (e) {
      console.log(error);
    }
  },
};
</script>

<style lang="scss">
.information-card {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-top: 40px;
  &__list {
    background-color: #303030;
    width: 50%;
    height: 30%;
  }
  &__name li {
    display: block;
    padding: 17px 15px;
    border: 1px solid #444;
    border-radius: 5px;
    font-size: 16px;
    color: #fff;
  }
  &__name li:hover {
    cursor: pointer;
    background-color: #3f3f3f;
  }
}
@media screen and (max-width: 1200px) {
  .information-card__list {
    width: 45%;
  }
}
@media screen and (max-width: 413px) {
  .information-card {
    flex-direction: column;
    &__list {
      width: 100%;
      margin-bottom: 20px;
    }
  }
}
</style>
