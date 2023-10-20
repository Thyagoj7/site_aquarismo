export interface IProduto {
  id: number;
  descricao: string;
  preco: number;
  descricaoPreco: string;
  imagem: string;
  quantidadeEstoque: number;
}

export interface IProdutoCarrinho extends IProduto{
  quantidade: number;
}

export const produtos: IProduto[] = [
  { id: 1, descricao: "Peixes de agua doce", preco: 439.00, descricaoPreco: "À vista no PIX", imagem: "./assets/images/uaru3.jpg",quantidadeEstoque: 100 },
  { id: 2, descricao: "Peixes de agua salgada", preco: 1200.50, descricaoPreco: "À vista no PIX", imagem: "./assets/images/palh.jpg", quantidadeEstoque: 100 },

]
