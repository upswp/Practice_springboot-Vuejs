<template>
  <div>
    <h3>글 목록</h3>
    <table>
      <thead>
        <tr>
          <th
            v-for="(colname, index) in colnames"
            :key="index"
            v-html="colname"
          ></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="article in articles" :key="article.no">
          <td v-html="article.no" @click="detailArticle(article.no)"></td>
          <td v-html="article.writer" @click="detailArticle(article.no)"></td>
          <td v-html="article.title" @click="detailArticle(article.no)"></td>
          <td v-html="article.regtime"></td>
          <td>
            <button name="삭제" @click="deleteArticle(article.no)">삭제</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import http from '../http-common';
export default {
  name: 'SelectBoard',
  data() {
    return {
      colnames: ['글번호', '글쓴이', '제목', '시간'],
      upHere: false,
      articles: [],
      loading: true,
      errored: false,
    };
  },
  methods: {
    detailArticle(did) {
      alert(did + '글 정보입니다.');
      this.$router.push('/detail/' + did);
    },
    retrieveArticle() {
      http
        .get('/select')
        .then((response) => (this.articles = response.data))
        .catch(() => {
          this.errored = true;
        })
        .finally(() => (this.loading = false));
    },
    deleteArticle(did) {
      alert(did + '가 삭제합니다.');
      http
        .delete('/delete/' + did)
        .then((response) => {
          if (response.data == 'success') {
            alert('삭제처리를 하였습니다.');
            this.retrieveArticle();
          } else {
            alert('삭제처리를 하지 못했습니다.');
          }
        })
        .catch(() => {
          this.errored = true;
        })
        .finally(() => (this.loading = false));
    },
  },
  mounted() {
    this.retrieveArticle();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
