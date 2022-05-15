const path = require('path'); //Roda no node, e ele só entende import via require.
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpacklPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: isDevelopment ? 'development' : 'production', //Permite que carregue bem rápido, sem ele ele gera o minificado
  
  devtool: isDevelopment ? 'eval-source-map' : 'source-map', // Permite que ao ver erros nos logs, ele mostre o código em react visível e não o gerado do bundle. tem vários, para dev usaremos: eval-source-map. O source-map é um pouco mais lento só que mais detalhado.
  
  entry: path.resolve(__dirname, 'src', 'index.tsx'), //Qual o é o arquivo principal/inicial da aplicação  // Sempre que usamos esse __dirname, ele vai pegar o diretório atual do lugar que vc digitou
  
  output: { //output - local de saída.
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  resolve: { //Informa quais extensões serão lidas nessa transpilação.
    extensions: ['.js', '.jsx', '.ts', '.tsx'] //Permite que não seja necessário nos imports informar essas extensões.
  },

  devServer: { //Permite a constante atualização, depende do "yarn add -D webpack-dev-server"
    static: path.resolve(__dirname, 'public'),
  },

  plugins: [
    isDevelopment && new ReactRefreshWebpacklPlugin(), //Plugin para não deixar restartar o app para o total zero quando alterarmos algo //Montando dessa forma, deixamos condicional ter ou não um plugin, mas precisa do filter(Boolean) para tratar o else, ja que true e false não são plugins hahah.
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
    })
  ].filter(Boolean), // Hack para remover os booleans dos plugins condicionais.

  module: { //Informa qual a regra que será seguida para cada tipo de arquivo que vamos ter
    rules: [
      {
        test: /\.(j|t)sx$/, //Quais arquivos seguem essa regra
        exclude: /node_modules/, //Bibliotecas do node_modules se viram para funcionar no browser.
        use: { 
          loader: 'babel-loader', //Integração entre Babel e Webpack.
          options: {
            plugins: [
              isDevelopment && require.resolve('react-refresh/babel')
            ].filter(Boolean)// Hack para remover os booleans dos plugins condicionais.
          }
        }
      },

      {
        test: /\.scss$/, //Quais arquivos seguem essa regra
        exclude: /node_modules/, 
        use: ['style-loader', 'css-loader', 'sass-loader'] //Permitem a leitura do import de scss ( trabalham em conjunto ) se fosse usar só css, só remover o sass loader e mudar o test para .css
      },      
    ]
  }
}