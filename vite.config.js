const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  root: 'src',
  base: '/pizzaShop/dist/',
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        'index': resolve(__dirname, 'src/index.html'),
        'accProfile': resolve(__dirname, 'src/accProfile.html'),
        'addItemCard2': resolve(__dirname, 'src/addItemCard2.html'),
        'menuCombo': resolve(__dirname, 'src/menuCombo.html'),
        'menuDesserts': resolve(__dirname, 'src/menuDesserts.html'),
        'menuDrink': resolve(__dirname, 'src/menuDrink.html'),
        'menuPizza': resolve(__dirname, 'src/menuPizza.html'),
        'menuPromotison': resolve(__dirname, 'src/menuPromotison.html'),
        'menuSause': resolve(__dirname, 'src/menuSause.html'),
        'menuSnacks': resolve(__dirname, 'src/menuSnacks.html'),
        'menuSushi': resolve(__dirname, 'src/menuSushi.html'),
        'myAcc': resolve(__dirname, 'src/myAcc.html'),
        'myAcc': resolve(__dirname, 'src/myAcc.html'),
        'myAcc2': resolve(__dirname, 'src/myAcc2.html'),
        'myAcc3': resolve(__dirname, 'src/myAcc3.html'),
        'trackYourOrder': resolve(__dirname, 'src/trackYourOrder.html'),
      }
    }
  }
})