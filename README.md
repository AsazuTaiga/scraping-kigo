<div align="center" id="top"> 
</div>

<h1 align="center">Scraping Kigo</h1>

<p align="center">
  <!-- <img alt="Github top language" src="https://img.shields.io/github/languages/top/AsazuTaiga/scraping-kigo?color=56BEB8"> -->

  <!-- <img alt="Github language count" src="https://img.shields.io/github/languages/count/AsazuTaiga/scraping-kigo?color=56BEB8"> -->

  <!-- <img alt="Repository size" src="https://img.shields.io/github/repo-size/AsazuTaiga/scraping-kigo?color=56BEB8"> -->

  <!-- <img alt="License" src="https://img.shields.io/github/license/AsazuTaiga/scraping-kigo?color=56BEB8"> -->

  <!-- <img alt="Github issues" src="https://img.shields.io/github/issues/AsazuTaiga/scraping-kigo?color=56BEB8" /> -->

  <!-- <img alt="Github forks" src="https://img.shields.io/github/forks/AsazuTaiga/scraping-kigo?color=56BEB8" /> -->

  <!-- <img alt="Github stars" src="https://img.shields.io/github/stars/AsazuTaiga/scraping-kigo?color=56BEB8" /> -->
</p>

<!-- Status -->

<!-- <h4 align="center"> 
	🚧  Scraping Kigo 🚀 Under construction...  🚧
</h4> 

<hr> -->

<p align="center">
  <a href="#warning-attention">Attention</a> &#xa0; | &#xa0; 
  <a href="#dart-about">About</a> &#xa0; | &#xa0; 
  <a href="#rocket-technologies">Technologies</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-requirements">Requirements</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-starting">Starting</a> &#xa0; | &#xa0;
  <a href="#memo-license">License</a> &#xa0; | &#xa0;
  <a href="https://github.com/AsazuTaiga" target="_blank">Author</a>１
</p>

<br>

## :warning: Attention ##

本スクリプトを使用して得たデータは、resultJson配下に格納されています。 

実行手順を記載してはおりますが、お手元で実行いただく必要はございません。 

スクレイピング対象ページの更新頻度はそれほど高くないので、定期実行等、サーバーに負荷をかける行為はやめましょう！

## :dart: About ##

現代俳句協会IT部が提供する[「現代俳句データベース」](http://www.haiku-data.jp/index.php)から季語データをスクレイピングしてみました。

## :rocket: Technologies ##

下記を使用しています。
- [Node.js](https://nodejs.org/en/)
- [selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver)
- [ChromeDriver](https://chromedriver.chromium.org/)

## :white_check_mark: Requirements ##

下記をインストールしてください。
- Node.js
- Chrome
- ChromeDriver(binをプロジェクトのルートディレクトリに配置)

なお、基本的に手元で実行する必要はないと思われます。
resultJson配下に実行結果を格納してあります。

## :checkered_flag: Starting ##

```bash
# Clone this project
$ git clone https://github.com/AsazuTaiga/scraping-kigo

# Access
$ cd scraping-kigo

# Install dependencies
$ npm i

# Run the project
$ npm run start
```

## :memo: License ##

This project is under license from MIT. For more details, see the [LICENSE](LICENSE) file.

※ソースコードのライセンスは著作者に帰属しますが、季語データのライセンスは現代俳句協会に帰属します。

Made with :heart: by <a href="https://github.com/AsazuTaiga" target="_blank">AsazuTaiga</a>

&#xa0;

<a href="#top">Back to top</a>
