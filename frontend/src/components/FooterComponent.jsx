import React, { Component } from "react";

class FooterComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <footer class="footer">
          <div class="waves">
            <div class="wave" id="wave1"></div>
            <div class="wave" id="wave2"></div>
            <div class="wave" id="wave3"></div>
            <div class="wave" id="wave4"></div>
          </div>
          <ul class="social-icon">
            <li class="social-icon__item">
              <a class="social-icon__link" href="#">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>
            <li class="social-icon__item">
              <a class="social-icon__link" href="#">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>
            <li class="social-icon__item">
              <a class="social-icon__link" href="#">
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
            </li>
            <li class="social-icon__item">
              <a class="social-icon__link" href="#">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>
          </ul>
          <ul class="menu">
            <li class="menu__item">
              <a class="menu__link" href="/inventory">
                Home
              </a>
            </li>
            <li class="menu__item">
              <a class="menu__link" href="/about">
                About
              </a>
            </li>
            <li class="menu__item">
              <a class="menu__link" href="/contact">
                Contact
              </a>
            </li>
          </ul>
          <p>&copy;2024 Jidan's Library | All Rights Reserved</p>
        </footer>
      </div>
    );
  }
}

export default FooterComponent;
