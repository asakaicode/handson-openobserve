# OpenObserveハンズオン
1. このリポジトリをローカルにclone。
```shell
$ git clone git@github.com:asakaicode/handson-openobserve.git
```
2. Docker imageをpullして、runをする
```shell
$ mkdir data
$ docker-compose up -d
```
3. http://localhost:5080にアクセスし、ログインする
   * メールアドレス：root@example.com
   * パスワード　　：Complexpass#123
4. handson-openobserveディレクトリに移動
```shell
$ cd handson-openobserve
```
5. yarn installを行い、アプリケーションを走らせる
```shell
$ yarn
$ yarn run build
$ yarn run start
```
6. curlコマンドで、以下にGETリクエストを投げる
```shell
$ curl http://localhost:3020/hello
```
7. http://localhost:5080にアクセスし、ログを確認する
