import React from 'react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <div style={{
      width: '100%', 
      height: '100vh', 
      marginTop: '64px', // For mobile (h-16)
      paddingLeft: '24px', 
      paddingRight: '24px', 
      paddingTop: '60px', 
      paddingBottom: '60px', 
      backgroundImage: 'url(/herobackgroundoriginal.jpg)', 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      flexDirection: 'column', 
      justifyContent: 'flex-end', 
      alignItems: 'flex-start', 
      gap: '10px', 
      display: 'inline-flex'
    }} className="md:mt-20 lg:mt-24">
      <div style={{
        width: '482px', 
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
          Ready to sell your car? Get a fast, no-obligation quote from Murcot Auto in just minutes. Whether it's financed, leased, or needs a little work — we make it easy.
        </div>
        <div style={{
          justifyContent: 'flex-start', 
          alignItems: 'center', 
          gap: '24px', 
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
          <div style={{
            paddingLeft: '16px', 
            paddingRight: '16px', 
            paddingTop: '8px', 
            paddingBottom: '8px', 
            borderRadius: '57.83px', 
            outline: '2px white solid', 
            outlineOffset: '-2px', 
            justifyContent: 'center', 
            alignItems: 'center', 
            gap: '10px', 
            display: 'flex'
          }}>
            <div style={{
              textAlign: 'center', 
              justifyContent: 'center', 
              display: 'flex', 
              flexDirection: 'column', 
              color: 'white', 
              fontSize: '20px', 
              fontFamily: 'Poppins', 
              fontWeight: '500', 
              lineHeight: '26px', 
              wordWrap: 'break-word'
            }}>
              Learn More
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
