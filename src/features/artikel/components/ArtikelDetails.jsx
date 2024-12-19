import { useParams } from "react-router-dom";
import { CardArtikel } from "../../../components/shared/CardArtikel.jsx";
import { Layout } from "../../../layouts/Layout.jsx";
import { format } from "date-fns";
import { useArtikelDetails } from "../hooks/useArtikelDetails.jsx";

export const ArtikelDetails = () => {
  const { id } = useParams();
  const { artikel, loading, error } = useArtikelDetails(id);

  return (
    <Layout>
      <section>
        <section className="bg-primary-950 text-center space-y-5 bg-[url('https://www.putraperkasa.co.id/wp-content/uploads/2023/05/Waspadai-Jamur-Mikotoksin-pada-Ayam-Ini-Bahayanya-1200x675.webp')] bg-no-repeat bg-center bg-cover pt-28 pb-40">
          <h4 className="text-white">Perawat Harian</h4>
          <h2 className="text-2xl font-semibold text-white">
            Cara Mengatasi Ayam Bertelur Sembarangan
          </h2>
        </section>

        <section className="md:px-16 px-4 -mt-20">
          <div className="md:px-20 px-5 pt-14 pb-6 rounded-t-2xl bg-white shadow-md">
            <article>
              <header className="flex gap-28">
                <div className="">
                  <h5 className="font-semibold">Di Upload</h5>
                  <p>Selasa, 22 Oktober 2024</p>
                </div>
                <div className="">
                  <h5 className="font-semibold">Di Upload</h5>
                  <p>Selasa, 22 Oktober 2024</p>
                </div>
              </header>

              <section className="md:mt-32 mt-20 text-wrap leading-relaxed">
                <p>
                  Banyak pertanyaan atas masalah yang dihadapi peternak ayam
                  petelur, salah satunya adalah bagaimana cara mengatasi ayam
                  bertelur sembarangan. Hal ini dapat menjadi masalah bagi
                  peternak, padahal masalah ini bisa diatasi jika tahu caranya.
                  Pada artikel kali ini, kita akan membahas tentang penyebab
                  ayam bertelur sembarangan, cara mengatasinya, hingga tips
                  membuat tempat bertelur.
                </p>

                <h3 className="mt-10 font-bold">
                  Penyebab Ayam Bertelur Sembarangan
                </h3>
                <p className="mt-4">
                  Salah satu permasalahan yang sering muncul yaitu bisa saja
                  ayam betina tersebut bertelur sembarangan. Sebenarnya, ayam
                  memiliki insting untuk meninggalkan telurnya di tempat yang
                  mereka anggap nyaman, termasuk di tanah atau pasir
                </p>

                <p className="mt-4">
                  Secara umum, ada berbagai penyebab ayam bertelur sembarangan,
                  beberapa di antaranya adalah sebagai berikut:
                </p>
                <ul className="list-disc ml-3 list-inside space-y-2">
                  <li>
                    Kondisi kandang yang tidak nyaman dan tidak tersedia tempat
                    bertelur yang memadai.
                  </li>
                  <li>
                    Ayam betina masih muda dan belum memiliki kebiasaan bertelur
                    di tempat yang sudah disediakan.
                  </li>
                  <li>
                    Adanya gangguan dari hewan predator sehingga ayam kehilangan
                    kandangnya.
                  </li>
                  <li>
                    Ayam dalam keadaan stres atau kurang asupan makanan dan
                    nutrisi yang cukup.
                  </li>
                  <li>
                    Insting bertelur alami dari ayam yang kadang mengarahkannya
                    ke tempat-tempat tersembunyi yang dianggap lebih aman.
                  </li>
                </ul>

                <h3 className="mt-10 font-bold">
                  Penyebab Ayam Bertelur Sembarangan
                </h3>
                <p className="mt-4">
                  Salah satu permasalahan yang sering muncul yaitu bisa saja
                  ayam betina tersebut bertelur sembarangan. Sebenarnya, ayam
                  memiliki insting untuk meninggalkan telurnya di tempat yang
                  mereka anggap nyaman, termasuk di tanah atau pasir
                </p>
                <ul className="list-disc ml-3 list-inside space-y-2">
                  <li>
                    Kondisi kandang yang tidak nyaman dan tidak tersedia tempat
                    bertelur yang memadai.
                  </li>
                  <li>
                    Ayam betina masih muda dan belum memiliki kebiasaan bertelur
                    di tempat yang sudah disediakan.
                  </li>
                  <li>
                    Adanya gangguan dari hewan predator sehingga ayam kehilangan
                    kandangnya.
                  </li>
                  <li>
                    Ayam dalam keadaan stres atau kurang asupan makanan dan
                    nutrisi yang cukup.
                  </li>
                  <li>
                    Insting bertelur alami dari ayam yang kadang mengarahkannya
                    ke tempat-tempat tersembunyi yang dianggap lebih aman.
                  </li>
                </ul>

                <p className="mt-4">
                  Dengan demikian, ayam akan bertelur pada kurungan tersebut.
                  Inilah metode yang dapat diterapkan untuk ayam yang baru
                  pertama kali bertelur, atau ayam babon yang sudah beberapa
                  kali bertelur namun masih meninggalkan telurnya sembarangan.
                  Dengan mempraktikkan sistem ini sebanyak tiga kali bertelur,
                  maka hal tersebut dapat membuat ayam menjadi terbiasa untuk
                  bertelur di sarangnya
                </p>
              </section>
            </article>

            {/* card */}
            <section className="mt-10">
              <h2 className="text-2xl font-bold">Baca Artikel lainnya</h2>
              <div className="grid grid-cols-3 pt-4 gap-10">
                {artikelList.map((artikel, index) => {
                  return (
                    <CardArtikel
                      key={index}
                      date={artikel.date}
                      image={artikel.img}
                      description={artikel.description}
                      to={artikel.to}
                    />
                  );
                })}
              </div>
            </section>
            {/* card */}
          </div>
        </section>
      </section>
    </Layout>
  );
};

const artikelList = Object.values({
  artikel1: {
    date: "18 Oktober 2024",
    description: "Kenali CRD, penyakit sistem pernafasan kronis pada ayam",
    img: "https://i.pinimg.com/236x/6a/02/18/6a0218319f83a37995bb7a7bc54d5875.jpg",
    to: "#",
  },
  artikel2: {
    date: "19 Oktober 2024",
    description: "Cara Meningkatkan Produktivitas Telur Ayam",
    img: "https://i.pinimg.com/236x/6d/f1/a5/6df1a510d05a33d260ad91b4d1384fd4.jpg",
    to: "#",
  },
  artikel3: {
    date: "20 Oktober 2024",
    description: "Pentingnya Vitamin untuk Kesehatan Ayam",
    img: "https://i.pinimg.com/236x/7d/de/4c/7dde4c37be6dc7771821141af3693bce.jpg",
    to: "#",
  },
});
