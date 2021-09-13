import {
  LitElement,
  html
} from 'lit-element'

class PostFetch extends LitElement {

  render() {
    return html `
      <link rel='stylesheet' href='../node_modules/bootstrap/dist/css/bootstrap.css'>
      <script src='../node_modules/bootstrap/dist/js/bootstrap.min.js'></script>
      <h1 class='display-4 mb-3' style='color: wheat'>Yeni film ekle</h1>
      <form id='postForm' @submit=${this.postFormData}>
        <div class='form-floating mb-3'>
          <input name='filmadi' type='text' class='form-control' id='filmadi' placeholder='Film adı' autocomplete='off' >
          <label for='filmadi'>Film adı</label>
        </div>
        <div class='form-floating mb-3'>
          <input name='yonetmen' type='text' class='form-control' id='yonetmen' placeholder='Yönetmen' autocomplete='off' >
          <label for='yonetmen'>Yönetmen</label>
        </div>
        <div class='form-floating mb-3'>
          <input name='yil' type='text' class='form-control' id='yil' placeholder='Yıl' autocomplete='off' >
          <label for='yil'>Yıl</label>
        </div>
        <div class='form-floating mb-3'>
          <input name='oyuncular' type='text' class='form-control' id='oyuncular' placeholder='Oyuncular' autocomplete='off' >
          <label for='oyuncular'>Oyuncular</label>
        </div>
        <div class='form-floating mb-3'>
          <input name='ozet' type='text' class='form-control' id='ozet' placeholder='Film özeti' autocomplete='off' >
          <label for='ozet'>Film özeti</label>
        </div>
        <div class='form-floating mb-3'>
          <input name='turler' type='text' class='form-control' id='turler' placeholder='Türler' autocomplete='off' >
          <label for='turler'>Türler</label>
        </div>
        <button type='submit' class='btn btn-success float-end'>Ekle</button>
      </form>`
  }

  postFormData(event) {
    event.preventDefault();
    let form = this.shadowRoot.getElementById('postForm');
    let formData = new FormData(form);
    let bodyJSON = {
      filmAdi: formData.get("filmadi"),
      yonetmen:  formData.get("yonetmen"),
      tarih:  formData.get("yil"),
      oyuncular:  formData.get("oyuncular"),
      ozet:  formData.get("ozet"),
      turler:  formData.get("turler")
    };

    fetch('http://localhost:8080/Save/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf8',
      },
      body: JSON.stringify(bodyJSON),
    }).then(x => x.json())
      .then(y => console.log(y))
      .catch(err => console.log(err));

  }

}
customElements.define('post-fetch', PostFetch);