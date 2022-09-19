<template>
  <main>
    <div v-if="loading" class="loading">
      <font-awesome-icon
        icon="fa-solid fa-circle-notch"
        class="fa-spin fa-2x"
      />
    </div>

    <section class="infos" v-if="!loading">
      <div class="profile">
        <img
          :src="repos[0].owner.avatar_url"
          alt="profile avatar"
          height="100"
        />
        <span>{{ repos[0].owner.login }}</span>
      </div>

      <div class="repos-info" v-for="(repo, index) in repos" :key="index">
        <img
          :src="handleLanguageImage(repo.language)"
          alt="main language"
          height="100"
          width="100"
        />
        <div class="repo-details">
          <p>
            <a v-bind:href="repo.html_url">Repository name: {{ repo.name }} </a>
          </p>
          <p>Main language: {{ repo.language ?? "No information" }}</p>
          <p>Description: {{ repo.description ?? "No information" }}</p>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import api from "@/services/api";

export default {
  name: "Home",
  data() {
    return {
      loading: true,
      repos: [],
    };
  },
  created() {
    setTimeout(() => {
      this.getRepos();
    }, 4000);
  },
  methods: {
    getRepos() {
      api
        .get("/repos")
        .then((res) => {
          console.log(res.data[0]);
          this.repos = res.data;
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    getImageUrl(name) {
      return new URL(`../assets/img/${name}`, import.meta.url);
    },
    getSvgUrl(name) {
      return new URL(`../assets/${name}`, import.meta.url);
    },
    handleLanguageImage(lang) {
      switch (lang) {
        case "JavaScript":
          return this.getImageUrl("js.png");
        case "TypeScript":
          return this.getImageUrl("ts.png");
        case "Dart":
          return this.getImageUrl("dart.png");
        case "HTML":
          return this.getImageUrl("html.png");
        case "CSS":
          return this.getImageUrl("css.png");
        case "Vue":
          return this.getSvgUrl("logo.svg");
        default:
          return this.getImageUrl("github.png");
      }
    },
  },
};
</script>

<style scoped>
.loading {
  margin: 0 auto;
  align-self: center;
}
main {
  min-height: 100vh;
  display: flex;
}
.profile {
  margin-top: 30px;
}
.repos-info {
  border: 1px solid #0558f9;
  border-radius: 6px;
  padding: 15px;
  margin: 10px 0;
  display: flex;
}
.repo-details {
  margin-left: 35px;
}
</style>
