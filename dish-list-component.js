import { LitElement, html } from '@polymer/lit-element';
import '@vaadin/vaadin-ordered-layout'
import '@polymer/paper-card/paper-card.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/paper-button/paper-button.js';
import './node_modules/rate-component/rate-component.js'

export class DishListComponent extends LitElement {
    constructor() {
        super();
        this.dishList = []
    }

    static get properties() {
        return {
            dishList: {
                type: Array
            }
        };
    }

    verifyThereAreDishes() {
        if (this.dishList.length === 0) {
            return false
        } else {
            return true
        }
    }

    render() {
            return html `
            <style is="custom-style">
                :host {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                paper-card{
                    width: 500px;
                }

                paper-button{
                    width: 450px;
                }
                .cafe-header { @apply --paper-font-headline; }
                .cafe-light { color: var(--paper-grey-600); }
                .cafe-location {
                    float: right;
                    font-size: 15px;
                    vertical-align: middle;
                }
                .cafe-reserve { color: var(--google-blue-500); }
                iron-icon.star {
                    --iron-icon-width: 16px;
                    --iron-icon-height: 16px;
                    color: var(--paper-amber-500);
                }
                .horizontal {
                    display: flex;
                    justify-content: center;
                }
                iron-icon.star:last-of-type { color: var(--paper-grey-500); }
            </style>
            
                ${this.verifyThereAreDishes() ?
                    html` 
                    <vaadin-vertical-layout>
                        ${this.dishList.map(dish => html`
                            <paper-card>
                                <div class="card-content">
                                    <paper-button class="info">${dish.name}</paper-button>
                                    <rating-component rate="${dish.rate}"></rating-component>
                                </div>
                            </paper-card>
                
                        `)}
                    </vaadin-vertical-layout>` : 
                    html`
                    <vaadin-vertical-layout>
                        <div class='block'>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaor-vp2mctnOF7bnbY7xWvkoIGKtrekFBHu_4aDhI2xSG1rRH&s" alt="empty dish">
                            <p>Lo siento, aún no se encuentra cargado ningún platillo</p>
                        </div>
                    <vaadin-vertical-layout>
                    `}
            
        `;
    }
}
customElements.define('dish-list-component', DishListComponent);