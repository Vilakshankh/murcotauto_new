import React from 'react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <div style={{
      width: '100%', 
      height: '100vh', 
      paddingLeft: '24px', 
      paddingRight: '24px', 
      paddingTop: '60px', 
      paddingBottom: '20px', 
      backgroundImage: 'url(/herobackgroundoriginal.jpg)', 
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right 32% center', // Mobile: slightly to the right
      flexDirection: 'column', 
      justifyContent: 'flex-end', 
      gap: '10px', 
      display: 'inline-flex'
    }} className="items-center md:items-start md:bg-right">
      <div className="w-full max-w-md md:max-w-none md:w-[482px] mx-4 md:mx-0" style={{
        padding: '16px', 
        background: 'rgba(0, 0, 0, 0.40)', 
        borderRadius: '19.08px', 
        flexDirection: 'column', 
        justifyContent: 'flex-start', 
        alignItems: 'flex-start', 
        gap: '16px', 
        display: 'flex'
      }}>
        <div style={{
          alignSelf: 'stretch', 
          color: 'white', 
          fontSize: '41.63px', 
          fontFamily: 'Barlow', 
          fontWeight: '800', 
          lineHeight: '49.73px', 
          wordWrap: 'break-word'
        }}>
          Selling your car, <br/>made easy!
        </div>
        <div style={{
          alignSelf: 'stretch', 
          color: 'white', 
          fontSize: '16px', 
          fontFamily: 'Poppins', 
          fontWeight: '400', 
          lineHeight: '21px', 
          wordWrap: 'break-word'
        }}>
          Ready to sell your car? Get a fast, no-obligation quote from Murcot Auto in just minutes. Whether it&apos;s financed, leased, or needs a little work — we make it easy.
        </div>
        <div style={{
          justifyContent: 'flex-start', 
          alignItems: 'center', 
          display: 'inline-flex'
        }}>
          <Link href="/get-started" style={{
            paddingLeft: '16px', 
            paddingRight: '16px', 
            paddingTop: '8px', 
            paddingBottom: '8px', 
            background: 'white', 
            borderRadius: '57.83px', 
            justifyContent: 'center', 
            alignItems: 'center', 
            gap: '10px', 
            display: 'flex',
            textDecoration: 'none'
          }}>
            <div style={{
              textAlign: 'center', 
              justifyContent: 'center', 
              display: 'flex', 
              flexDirection: 'column', 
              color: '#33853F', 
              fontSize: '20px', 
              fontFamily: 'Poppins', 
              fontWeight: '500', 
              lineHeight: '26px', 
              wordWrap: 'break-word'
            }}>
              Get Started
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
