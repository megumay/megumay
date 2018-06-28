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
                      vCase.gg is the case opening site for{' '}
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
                        Bir vKey'i nasıl alabilirim?
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
                          VGO'yı destekleyen bir pazardan satın alın
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
                      vCase.gg, şimdilik Ethereum blockchain'i temel alıyor.
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
                       VCase'ım açıldığında, VGO öğelerim nereye gider?
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
                        What can I do with my VGO items once I receive them?
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
                      You can trade your VGO items to another VGO user for free
                      on VGO.gg, as long as you have their VGO Trade URL. You
                      can also sell or trade them to any marketplace that
                      supports VGO items.
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
                      VCases's opening odds are on average around 3x better than
                      Steam's case opening odds.
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
                        How do I know that the vCase odds are what you claim
                        they are?
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
                      You can check the results of all vCase openings because
                      all items generated from vCases are recorded on the
                      Ethereum blockchain. Each item generated links back to a
                      blockchain transaction for full transparency. For this
                      reason, VGO items also cannot be duplicated.
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
                        Can I lose my VGO items, or can VGO get shut down by
                        Steam?
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
                      No. Since VGO uses blockchain technology, neither Steam or
                      anyone else can shut it down. If the OPSkins ExpressTrade
                      website disappeared tomorrow, the data behind the items
                      would still exist and could be rendered with graphics to
                      showcase the unique properties of the items.
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
                        Why is there a minimum case opening quantity?
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
                      Because vCase is operating on the Ethereum blockchain at
                      this time, there is a minimum case opening quantity due to
                      ETH gas fees. Once we migrate to the WAX Blockchain, these
                      minimums will change
                    </div>
                  </div>
                </div>
                <h2 className="sub-header">
                  How can I build my own vCase opening site?
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
                       otomatik olarak size ödenen% 5'lik bir ortaklık ücreti kazanırsınız.
                       ETH'de gerçek zamanlı. VCase ortaklık programı olduğundan
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
