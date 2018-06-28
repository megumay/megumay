import React, { Component } from 'react';
import $ from 'jquery';

class FaqList extends Component {
  componentDidMount() {
    $('#accordion').on('show.bs.collapse', e => {
      $(e.target)
        .parent()
        .addClass('faq-shown');
    });
    $('#accordion').on('hide.bs.collapse', e => {
      $(e.target)
        .parent()
        .removeClass('faq-shown');
    });
  }

  componentWillUnmount() {
    $('#accordion').off('show.bs.collapse');
    $('#accordion').off('hide.bs.collapse');
  }

  render() {
    let faqIndex = 0;
    return (
      <section className="faq">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>VCASE FAQ</h2>
              <div id="accordion">
                <div className="card">
                  <div className="card-header" id={`heading-${faqIndex}`}>
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link full-width"
                        data-toggle="collapse"
                        data-target={`#collapse-${faqIndex}`}
                        aria-expanded="true"
                        aria-controls={`collapse-${faqIndex}`}
                      >
                        VCase.gg nedir ve nasıl çalışır?
                      </button>
                    </h5>
                  </div>
                  <div
                    id={`collapse-${faqIndex}`}
                    className="collapse"
                    aria-labelledby={`heading-${faqIndex++}`}
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      vCase.gg, durumun açılış sitesidir.{' '}
                      <a href="http://vgo.gg/" target="_blank">
                        VGO items.{' '}
                      </a>. vCases bir vKey ile açılır.
                      <br />
                      <br />
                      VGO öğeleri blockchain kullanılarak üretilen dijital öğelerdir
                       Teknoloji, böylece herkes, bir
                       İstedikleri zaman, herhangi bir kısıtlama olmaksızın, ticaret yapmak isterler.
                       yasaklar ya da korkular. Her VGO öğesi
                       bir-bir-tür ve bir Ethereum smart dan üretilmiştir
                       sözleşme. Bu ürünler hiç bir şeye tabi olamaz
                       Ticaret tutarları veya yasaklar gibi ticaret kısıtlamaları.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id={`heading-${faqIndex}`}>
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link full-width"
                        data-toggle="collapse"
                        data-target={`#collapse-${faqIndex}`}
                        aria-expanded="true"
                        aria-controls={`collapse-${faqIndex}`}
                      >
                        Bir vKey i nasıl alabilirim?
                      </button>
                    </h5>
                  </div>
                  <div
                    id={`collapse-${faqIndex}`}
                    className="collapse"
                    aria-labelledby={`heading-${faqIndex++}`}
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      VKey almanın iki yolu vardır:
                      <ul>
                        <li>
                          VGO yı destekleyen bir pazardan satın alın
                           ürün
                        </li>
                        <li>Başka bir VGO kullanıcısındaki ticarette bir vKey edinin</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id={`heading-${faqIndex}`}>
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link full-width"
                        data-toggle="collapse"
                        data-target={`#collapse-${faqIndex}`}
                        aria-expanded="true"
                        aria-controls={`collapse-${faqIndex}`}
                      >
                        Neden sadece bir tür vKey var?
                      </button>
                    </h5>
                  </div>
                  <div
                    id={`collapse-${faqIndex}`}
                    className="collapse"
                    aria-labelledby={`heading-${faqIndex++}`}
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      Basitlik için, herhangi bir Anahtar herhangi bir Case açabilirsiniz.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id={`heading-${faqIndex}`}>
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link full-width"
                        data-toggle="collapse"
                        data-target={`#collapse-${faqIndex}`}
                        aria-expanded="true"
                        aria-controls={`collapse-${faqIndex}`}
                      >
                        Bir Case açmak neden bu kadar uzun sürüyor?
                      </button>
                    </h5>
                  </div>
                  <div
                    id={`collapse-${faqIndex}`}
                    className="collapse"
                    aria-labelledby={`heading-${faqIndex++}`}
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      vCase.gg, şimdilik Ethereum blockchain i temel alıyor.
                       geleneksel kasa açılışına göre birçok avantaj getiriyor
                       siteler, esas olarak şeffaflık. Ancak biz taşınana kadar
                       WAX Blockchain, kasa açıklıkları ikiye kadar alabilir
                       Ethereum hızı nedeniyle tamamlanması dakikalar
                       blockchain. WAX Blockchain çok daha hızlı olacak ve
                       Vaka açılışlarını anında yapacaktır.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id={`heading-${faqIndex}`}>
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link full-width"
                        data-toggle="collapse"
                        data-target={`#collapse-${faqIndex}`}
                        aria-expanded="true"
                        aria-controls={`collapse-${faqIndex}`}
                      >
                       VCase ım açıldığında, VGO öğelerim nereye gider?
                      </button>
                    </h5>
                  </div>
                  <div
                    id={`collapse-${faqIndex}`}
                    className="collapse"
                    aria-labelledby={`heading-${faqIndex++}`}
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      Bir vCase açılışından aldığınız VGO öğeleri şunlardır:
                       senin gönderdi
                      {' '}
                      <a href="//trade.opskins.com/inventory" target="_blank">
                        OPSkins ExpressTrade Inventory
                      </a>.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id={`heading-${faqIndex}`}>
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link full-width"
                        data-toggle="collapse"
                        data-target={`#collapse-${faqIndex}`}
                        aria-expanded="true"
                        aria-controls={`collapse-${faqIndex}`}
                      >
                       VGO öğelerimle bunları aldıktan sonra neler yapabilirim?
                      </button>
                    </h5>
                  </div>
                  <div
                    id={`collapse-${faqIndex}`}
                    className="collapse"
                    aria-labelledby={`heading-${faqIndex++}`}
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      VGO öğelerinizi başka bir VGO kullanıcısına ücretsiz olarak aktarabilirsiniz.
                       VGO.gg de, kendi VGO Ticari URL niz olduğu sürece. Sen
                       ayrıca herhangi bir pazara satış veya ticaret yapabilir
                       VGO öğelerini destekler.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id={`heading-${faqIndex}`}>
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link full-width"
                        data-toggle="collapse"
                        data-target={`#collapse-${faqIndex}`}
                        aria-expanded="true"
                        aria-controls={`collapse-${faqIndex}`}
                      >
                        What are the vCase opening odds?
                      </button>
                    </h5>
                  </div>
                  <div
                    id={`collapse-${faqIndex}`}
                    className="collapse"
                    aria-labelledby={`heading-${faqIndex++}`}
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      VCases in açılış oranları ortalama 3 kat daha iyi.
                       Steam in kasa açılış oranları.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id={`heading-${faqIndex}`}>
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link full-width"
                        data-toggle="collapse"
                        data-target={`#collapse-${faqIndex}`}
                        aria-expanded="true"
                        aria-controls={`collapse-${faqIndex}`}
                      >
                        VCase oranlarının iddia ettiğiniz şey olduğunu nasıl bilebilirim?
                         onlar?
                      </button>
                    </h5>
                  </div>
                  <div
                    id={`collapse-${faqIndex}`}
                    className="collapse"
                    aria-labelledby={`heading-${faqIndex++}`}
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      Tüm vCase açılışlarının sonuçlarını kontrol edebilirsiniz çünkü
                       vCases ten üretilen tüm öğeler
                       Eteryum blok zinciri. Her bir öğe, bir
                       Tam şeffaflık için blockchain işlemi. Bunun için
                       Nedeni, VGO öğeleri de çoğaltılamaz.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id={`heading-${faqIndex}`}>
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link full-width"
                        data-toggle="collapse"
                        data-target={`#collapse-${faqIndex}`}
                        aria-expanded="true"
                        aria-controls={`collapse-${faqIndex}`}
                      >
                        VGO öğelerimi kaybedebilir miyim, yoksa VGO kapanabilir mi?
                         Buhar?
                      </button>
                    </h5>
                  </div>
                  <div
                    id={`collapse-${faqIndex}`}
                    className="collapse"
                    aria-labelledby={`heading-${faqIndex++}`}
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      Hayır. VGO blockchain teknolojisini kullandığından, ne Steam ne de
                       başkası kapatabilir. OPSkins ExpressTrade varsa
                       web sitesi yarın ortadan kayboldu, öğelerin arkasındaki veriler
                       hala var olacak ve grafiklerle işlenebilecek
                       öğelerin benzersiz özelliklerini sergileyin.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id={`heading-${faqIndex}`}>
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link full-width"
                        data-toggle="collapse"
                        data-target={`#collapse-${faqIndex}`}
                        aria-expanded="true"
                        aria-controls={`collapse-${faqIndex}`}
                      >
                        Minimum kasa açılış miktarı neden var?
                      </button>
                    </h5>
                  </div>
                  <div
                    id={`collapse-${faqIndex}`}
                    className="collapse"
                    aria-labelledby={`heading-${faqIndex++}`}
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      VCase, Ethereum blockchain üzerinde çalıştığından
                       bu sefer, nedeniyle minimum bir kasa açılış miktarı
                       ETH gaz ücretleri. WAX Blockchaine geçtikten sonra, bunlar
                       minimumlar değişecek
                    </div>
                  </div>
                </div>
                <h2 className="sub-header">
                  Kendi vCase açılış sitemi nasıl oluşturabilirim?
                </h2>
                <div className="card">
                  <div className="card-header" id={`heading-${faqIndex}`}>
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link full-width"
                        data-toggle="collapse"
                        data-target={`#collapse-${faqIndex}`}
                        aria-expanded="true"
                        aria-controls={`collapse-${faqIndex}`}
                      >
                        Kendi vCase.gg vaka açılış sitemi oluşturabilir miyim?
                      </button>
                    </h5>
                  </div>
                  <div
                    id={`collapse-${faqIndex}`}
                    className="collapse"
                    aria-labelledby={`heading-${faqIndex++}`}
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      Evet. VCase kodu açık kaynaklıdır ve{' '}
                      <a href="https://github.com/vgoskins" taget="_blank">
                        GitHub
                      </a>.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id={`heading-${faqIndex}`}>
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link full-width"
                        data-toggle="collapse"
                        data-target={`#collapse-${faqIndex}`}
                        aria-expanded="true"
                        aria-controls={`collapse-${faqIndex}`}
                      >
                        VCase siteleri için bir ortaklık programı var mı?
                      </button>
                    </h5>
                  </div>
                  <div
                    id={`collapse-${faqIndex}`}
                    className="collapse"
                    aria-labelledby={`heading-${faqIndex++}`}
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                     Evet. VCase işlevselliğini benimseyen tüm siteler
                       otomatik olarak size ödenen% 5 lik bir ortaklık ücreti kazanırsınız.
                       ETH de gerçek zamanlı. VCase ortaklık programı olduğundan
                       Akıllı sözleşme tabanlı, birisi bir vKey'i açmak için
                       Sitenizde vCase, ödemeniz anında gönderilecektir
                       Ethereum adresiniz.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default FaqList;
