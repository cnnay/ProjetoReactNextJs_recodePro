import React from 'react';
import Link from "next/link";
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';

function HomePage() {
    return (
    <div>
       

        <Image
            src="/img/bannerTenis.png"
            alt="Picture of the author"
            width={1350}
            height={350} />

        <h1 class="display-4 text-center mt-5"> Bem vindo ao nosso e-commerce</h1>


        <div class="container">
            <div class="row">
                <div class="col-12 text-center mt-3">
                    <Link  href="/produto">
                        <a class="btn btn-info text-center col-6" > Produtos </a>
                    </Link>
                </div>
            </div>
        </div>



    </div>
    ) 
}

export default HomePage;


