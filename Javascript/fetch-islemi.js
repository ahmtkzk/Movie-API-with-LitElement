import {LitElement, html} from 'lit-element';

class IslemClassi extends LitElement {

  static get properties() {
    return {data: Object};
  }

  connectedCallback() {
    super.connectedCallback();
    this.fetchDataFromUrl();
  }

  //API
  fetchDataFromUrl() {
    fetch('http://localhost:8080/')
      .then(response => response.json())
      .then(x => {
        this.data = x;
      })
      .catch(err => console.log(err));
  }

  //Constructor
  constructor() {
    super();
    this.name = 'Ahmet';
  }

  //Render işlemi
  render() {
    return this.data ?
      html`
        <link rel='stylesheet' href='../node_modules/bootstrap/dist/css/bootstrap.css'>
        <ul style='list-style-type:none;'>
          ${this.data.map(veri => html
            `
              <div class='list-group'>
                <a href='http://localhost:8080/Delete/${veri.id}' style='text-decoration: none'>
                  <button type='button' class='list-group-item list-group-item-action list-group-item-dark mt-2'>
                    <h2>${veri.filmAdi}</h2>
                    <p>${veri.ozet}</p>
                    <p><b>Yönetmen:</b> ${veri.yonetmen}</p>
                    <p><b>Vizyon tarihi:</b> ${veri.tarih}</p>
                    <p><b>Oyuncular:</b> ${veri.oyuncular}</p>
                    <p><b>Tür:</b> ${veri.turler}</p>
                  </button>
                </a>
              </div>
              console.log(${veri.id});
            `)}
        </ul>

      ` : html`<span>Gelmedi</span>`;
  }

}

window.customElements.define('fetch-islemi', IslemClassi);


