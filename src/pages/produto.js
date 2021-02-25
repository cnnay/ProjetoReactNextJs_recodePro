import React from 'react';
import Link from "next/link";
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';

function Produtos() {
    return (
    <div>

        <Image
            src="/img/bannerTenis.png"
            alt="Picture of the author"
            width={1350}
            height={350} />

        <h1 class="display-4 text-center mt-3"> Nossos produtos</h1>
        
        <button class="waves-effect waves-light btn">

        </button>


        <div class="container">
            <div class="row">

                <div class="col-sm">
                    <h4>Tênis Nike</h4>
                    <p className="lead">R$ 149</p>
                    <Image
                        src="/img/tenisNike2.jpg"
                        alt="Picture of the author"
                        width={150}
                        height={120} />
                </div>
                
                <div class="col-sm">
                    <h4> Tênis Nike  </h4>
                    <p className="lead">R$ 249</p>
                    <Image
                        src="/img/tenisNike1.jpg"
                        alt="Picture of the author"
                        width={150}
                        height={120} />
                </div>

                <div class="col-sm">
                    <h4>Tênis Adidas </h4>
                    <p className="lead">R$ 199</p>
                    <Image
                        src="/img/tenisAdidas1.jpg"
                        alt="Picture of the author"
                        width={150}
                        height={120} />
                </div>
            </div>
        </div>


        <div class="container">
            <div class="row">
                <div class="col-12 text-center mt-5">
                    <Link href="/">
                        <a class="btn btn-info text-center col-6" > Home </a>
                    </Link>
                </div>
            </div>
        </div>

        <div class="container mt-5">
            <div class="row">
            </div>
        </div>

    </div>
    ) 
}

export default Produtos;