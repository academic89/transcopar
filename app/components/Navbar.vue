<template>
  <div
    :class="active ? 'active-nav shadow-sm' : ''"
    class="w-100 navbar-component"
  >
    <div class="logo">
      <img src="../assets/img/logo.png" alt="Transcopar" />
    </div>
    <div class="label-menu">Menú</div>
    <div id="menu-icon" class="menu-icon">
      <span class="menu-icon__line menu-icon__line-left"></span>
      <span class="menu-icon__line"></span>
      <span class="menu-icon__line menu-icon__line-right"></span>
    </div>

    <div class="nav">
      <div class="nav__content">
        <div class="w-100 text-center box-logo">
          <img src="../assets/img/logo.png" alt="Transcopar" />
        </div>
        <ul class="nav__list">
          <li class="nav__list-item" @click="changeRoute('/')">Inicio</li>
          <li class="nav__list-item" @click="changeRoute('/about')">
            Quiénes somos
          </li>
          <li class="nav__list-item" @click="changeRoute('/contact')">
            Contacto
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      body: null,
      menu: null,
      menuItems: null,
      active: false,
    }
  },
  beforeDestroy() {
    this.init()
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeMount() {
    this.init()
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    async init() {
      this.body = await window.document.querySelector('body')
      this.menu = await window.document.querySelector('#menu-icon')
      this.menuItems = await window.document.querySelectorAll('.nav__list-item')

      this.applyListeners(this.menu)
    },
    applyListeners(menu) {
      menu.addEventListener('click', () =>
        this.toggleClass(this.body, 'nav-active')
      )
    },
    toggleClass(element, stringClass) {
      if (element.classList.contains(stringClass))
        element.classList.remove(stringClass)
      else element.classList.add(stringClass)
    },
    handleScroll() {
      if (window.scrollY > 100) {
        this.active = true
      } else {
        this.active = false
      }
    },
    changeRoute(route) {
      this.toggleClass(this.body, 'nav-active')
      setTimeout(() => {
        this.$router.push(route)
      }, 300)
    },
  },
}
</script>
<style scoped>
.navbar-component {
  z-index: 6;
  width: 100%;
  height: 90px;
  background: transparent;
  position: fixed;
  top: 0;
  transition: all ease 0.5s;
  -webkit-transition: all ease 0.5s;
}
.navbar-component.active-nav {
  background: #fff;
  height: 70px;
}
.label-menu {
  position: absolute;
  right: 90px;
  top: 25px;
  color: #fff;
}
.navbar-component.active-nav .label-menu {
  color: #000;
}
.logo {
  position: fixed;
  width: 180px;
  top: 10px;
  left: 30px;
  z-index: 6;
  opacity: 1;
  transition: all ease 0.5s;
  display: none;
  -webkit-transition: all ease 0.5s;
}

@media (min-width: 992px) {
  .logo {
    width: 330px;
  }
}
.navbar-component.active-nav .logo {
  width: 180px;
  display: inline-block;
}
.menu-icon {
  height: 30px;
  width: 30px;
  position: fixed;
  z-index: 6;
  right: 50px;
  top: 30px;
  cursor: pointer;
}
.menu-icon__line {
  height: 2px;
  width: 30px;
  display: block;
  background-color: #ffffff;
  margin-bottom: 4px;
  -webkit-transition: background-color 0.5s ease, -webkit-transform 0.2s ease;
  transition: background-color 0.5s ease, -webkit-transform 0.2s ease;
  transition: transform 0.2s ease, background-color 0.5s ease;
  transition: transform 0.2s ease, background-color 0.5s ease,
    -webkit-transform 0.2s ease;
}
.menu-icon__line-left {
  width: 15px;
}
.menu-icon__line-right {
  width: 15px;
  float: right;
}
.navbar-component.active-nav .menu-icon__line {
  background-color: #000;
}
.nav {
  position: fixed;
  z-index: 1;
}
.nav:before,
.nav:after {
  content: '';
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(234, 234, 234, 0.2);
  z-index: -1;
  -webkit-transition: -webkit-transform cubic-bezier(0.77, 0, 0.175, 1) 0.8s;
  transition: -webkit-transform cubic-bezier(0.77, 0, 0.175, 1) 0.8s;
  transition: transform cubic-bezier(0.77, 0, 0.175, 1) 0.8s;
  transition: transform cubic-bezier(0.77, 0, 0.175, 1) 0.8s,
    -webkit-transform cubic-bezier(0.77, 0, 0.175, 1) 0.8s;
  -webkit-transform: translateX(0%) translateY(-100%);
  transform: translateX(0%) translateY(-100%);
}
.nav:after {
  background: white;
  -webkit-transition-delay: 0s;
  transition-delay: 0s;
}
.nav:before {
  -webkit-transition-delay: 0.1s;
  transition-delay: 0.1s;
}
.box-logo {
  opacity: 0;
  transition: all ease 2s;
  -webkit-transition: all ease 2s;
  margin-bottom: 20px;
}
.nav__content {
  position: fixed;
  top: -30%;
  -webkit-transform: translate(0%, -50%);
  transform: translate(0%, -50%);
  width: 100%;
  text-align: center;
  font-size: calc(1vw + 15px);
  font-weight: 200;
  cursor: pointer;
  z-index: 9;
  transition: all ease 2s;
  -webkit-transition: all ease 2s;
}
.nav__list {
  padding-left: 0;
}
.nav__list-item {
  position: relative;
  display: inline-block;
  -webkit-transition-delay: 0.8s;
  transition-delay: 0.8s;
  opacity: 0;
  -webkit-transform: translate(0%, 100%);
  transform: translate(0%, 100%);
  -webkit-transition: opacity 0.2s ease, -webkit-transform 0.3s ease;
  transition: opacity 0.2s ease, -webkit-transform 0.3s ease;
  transition: opacity 0.2s ease, transform 0.3s ease;
  transition: opacity 0.2s ease, transform 0.3s ease,
    -webkit-transform 0.3s ease;
  text-transform: uppercase;
}
.nav__list-item:before {
  content: '';
  position: absolute;
  background: #000000;
  width: 20px;
  height: 3px;
  top: 100%;
  -webkit-transform: translate(0%, 0%);
  transform: translate(0%, 0%);
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
  z-index: -1;
}

.nav__list-item:hover:before {
  background: red;
}
body.nav-active .nav__content {
  top: 50%;
}
body.nav-active .box-logo {
  opacity: 1;
}
body.nav-active .logo {
  z-index: -1;
  opacity: 0;
}
body.nav-active .menu-icon__line {
  background-color: #000;
  -webkit-transform: translateX(0px) rotate(-45deg);
  transform: translateX(0px) rotate(-45deg);
}
body.nav-active .menu-icon__line-left {
  -webkit-transform: translateX(1px) rotate(45deg);
  transform: translateX(1px) rotate(45deg);
}
body.nav-active .menu-icon__line-right {
  -webkit-transform: translateX(-2px) rotate(45deg);
  transform: translateX(-2px) rotate(45deg);
}
body.nav-active .nav {
  visibility: visible;
}
body.nav-active .nav:before,
body.nav-active .nav:after {
  -webkit-transform: translateX(0%) translateY(0%);
  transform: translateX(0%) translateY(0%);
}
body.nav-active .nav:after {
  -webkit-transition-delay: 0.1s;
  transition-delay: 0.1s;
}
body.nav-active .nav:before {
  -webkit-transition-delay: 0s;
  transition-delay: 0s;
}
body.nav-active .nav__list-item {
  display: block;
  margin-bottom: 15px;
  opacity: 1;
  -webkit-transform: translateX(0%);
  transform: translateX(0%);
  -webkit-transition: opacity 0.3s ease, color 0.3s ease,
    -webkit-transform 0.3s ease;
  transition: opacity 0.3s ease, color 0.3s ease, -webkit-transform 0.3s ease;
  transition: opacity 0.3s ease, transform 0.3s ease, color 0.3s ease;
  transition: opacity 0.3s ease, transform 0.3s ease, color 0.3s ease,
    -webkit-transform 0.3s ease;
}
body.nav-active .nav__list-item:nth-child(0) {
  -webkit-transition-delay: 0.5s;
  transition-delay: 0.5s;
}
body.nav-active .nav__list-item:nth-child(1) {
  -webkit-transition-delay: 0.6s;
  transition-delay: 0.6s;
}
body.nav-active .nav__list-item:nth-child(2) {
  -webkit-transition-delay: 0.7s;
  transition-delay: 0.7s;
}
body.nav-active .nav__list-item:nth-child(3) {
  -webkit-transition-delay: 0.8s;
  transition-delay: 0.8s;
}
body.nav-active .nav__list-item:nth-child(4) {
  -webkit-transition-delay: 0.9s;
  transition-delay: 0.9s;
}
</style>
