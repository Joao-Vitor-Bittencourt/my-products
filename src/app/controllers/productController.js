class ProductController {
  index(request, response) {
    response.send('enviado do ProductController');
  }

  show() {
    // obter um registro
  }

  store() {
    // criar novo registro
  }

  update() {
    // editar um registro
  }

  delete() {
    // apagar registro
  }
}

module.exports = new ProductController();
