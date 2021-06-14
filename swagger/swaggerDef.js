/*
    マイクロサービスを複数のチームで開発する上で、各サービス間のインターフェース定義を統一された方法で記述するべき
    これを実現するためにREST APIのインターフェース定義のデファクトスタンダードであるSwaggerを利用する

    swagger-jsdocを利用することで、javascript中のコメントに記述されたswagger定義から
    SwaggerSpecファイルを生成できるようになる。
*/

const pkg = require('../package.json')

module.exports = {
    openapi: '3.0.0',
    info: {
        title: pkg.name,
        version: pkg.version,
        description: pkg.description
    },
    servers: [
        {
        url: '/v1'
        }
    ]
}