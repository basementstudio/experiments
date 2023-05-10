import * as React from 'react'

import { NavigationLayout } from '../components/layout/navigation-layout'

const LinearLantern = () => {
  const containerRef = React.useRef(null)

  React.useEffect(() => {
    let bounds = containerRef.current.getBoundingClientRect()
    const handleResize = () => {
      bounds = containerRef.current.getBoundingClientRect()
    }

    const handleMouseMove = (e) => {
      const x = e.clientX - bounds.left
      const y = e.clientY - bounds.top

      containerRef.current.style.setProperty('--lantern-x', `${x}px`)
      containerRef.current.style.setProperty('--lantern-y', `${y}px`)
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <main
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100vh'
      }}
    >
      <div
        ref={containerRef}
        style={{ '--lantern-size': '150px', position: 'relative' }}
      >
        <div
          style={{
            background: 'linear-gradient(180deg, #212121 0%, #000000 100%)',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '262px',
            aspectRatio: 1
          }}
        >
          <svg
            width="139"
            height="121"
            xmlns="http://www.w3.org/2000/svg"
            fill="#fff"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M137.12 11.26c0 5.26-4.27 9.53-9.52 9.53s-9.53-4.27-9.53-9.53 4.27-9.52 9.53-9.52 9.52 4.27 9.52 9.52Zm1.73 0c0-6.21-5.04-11.26-11.26-11.26s-11.26 5.04-11.26 11.26 5.04 11.26 11.26 11.26 11.26-5.04 11.26-11.26Z"
            />
            <path d="M125.55 14.4898c0 1.11.9 1.98 2 1.98h1.21c1.12 0 2.03-.91 2.03-2.03v-3.68c0-1.11997-.91-2.02998-2.03-2.02998h-1.52c-.89 0-1.62.75-1.62 1.63998V6.06982h-2.44V16.4298h2.37v-1.94Zm.08-2.8c0-.42.34-.76.76-.76h1.21c.42 0 .76.34.76.76v1.83c0 .42-.34.76-.76.76h-1.21c-.42 0-.76-.34-.76-.76v-1.83ZM133.84 14.29h-2.13v2.13h2.13v-2.13Z" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M78.87 81.37h39.01l10.46-30.63s-29.8-23.03-48.79-37.7H48.79C29.8 27.72 0 50.74 0 50.74l10.46 30.63h39.06v12.21H5.54999v21.99H42.38l5.54-4.89H51l5.91 9.77h14.68l5.84-9.77h3.06l5.04 4.89h37.27V93.58H78.88V81.37h-.01ZM14.18 61.38C25.2 52.86 57.17 28.16 63.2 23.5h1.92c6.03 4.66 38 29.36 49.02 37.88l-.99 2.89H15.16l-.99-2.89h.01Z"
            />
          </svg>
        </div>

        <div
          style={{
            background: 'linear-gradient(180deg, #212121 0%, #000000 100%)',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '262px',
            aspectRatio: 1,
            // mask part
            position: 'absolute',
            inset: 0,
            WebkitMaskImage:
              'radial-gradient(circle var(--lantern-size) at var(--lantern-x, -400px) var(--lantern-y, -400px), black 40%, transparent)'
          }}
        >
          <svg
            width="139"
            height="121"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#FF8974"
          >
            <path
              d="M127.6 21.04c5.388 0 9.77-4.3821 9.77-9.78 0-5.3879-4.372-9.77-9.77-9.77s-9.78 4.37159-9.78 9.77c0 5.3982 4.392 9.78 9.78 9.78ZM127.59.25c6.082 0 11.01 4.93793 11.01 11.01 0 6.0819-4.928 11.01-11.01 11.01s-11.01-4.9281-11.01-11.01c0-6.08193 4.928-11.01 11.01-11.01Z"
              strokeWidth=".5"
            />
            <path
              d="M125.62 10.3698h.25c0-.7559.622-1.38998 1.37-1.38998h1.52c.982 0 1.78.79808 1.78 1.77998v3.68c0 .9819-.798 1.78-1.78 1.78h-1.21c-.966 0-1.75-.7621-1.75-1.73h-.5v1.69h-1.87V6.31982h1.94v4.04998h.25Zm.77.31c-.558 0-1.01.4519-1.01 1.01v1.83c0 .5581.452 1.01 1.01 1.01h1.21c.558 0 1.01-.4519 1.01-1.01v-1.83c0-.558-.452-1.01-1.01-1.01h-1.21ZM131.96 14.54h1.63v1.63h-1.63v-1.63Z"
              strokeWidth=".5"
            />
            <path d="M78.87 81.37h-.49v12.71h43.92v20.99H85.7327l-4.8945-4.749-.1455-.141h-3.5464l-.1455.244-5.6944 9.526H57.1919l-5.7641-9.529-.1459-.241H47.7309l-.1418.125-5.3982 4.765H6.04999V94.08H50.02V80.87H10.8176L.588789 50.917l.056182-.0434.978259-.7557 3.63542-2.8084c3.09048-2.3875 7.40895-5.7238 12.32085-9.5188 9.7772-7.5541 21.9058-16.9258 31.3813-24.2507h30.4185c9.4754 7.3199 21.6037 16.6916 31.3817 24.2469l12.32 9.5211 3.636 2.8094.978.756.056.0435L117.522 80.87H78.87v.5ZM52.482 31.1498C40.3905 40.4925 21.9595 54.7335 14.0092 60.88h-.539l.2268.6621.99 2.89.1158.3379h98.7042l.116-.3379.99-2.89.116-.3387-.283-.2189c-7.883-6.0943-26.4838-20.4667-38.6436-29.8622-4.8402-3.7398-8.6599-6.6911-10.3767-8.0179L65.2907 23h-2.2614l-.135.1044c-1.721 1.33-5.5552 4.2925-10.4123 8.0454Z" />
          </svg>

          <svg
            width="155"
            height="13"
            xmlns="http://www.w3.org/2000/svg"
            fill="#FF8974"
            style={{
              position: 'absolute',
              bottom: 36,
              left: '50%',
              transform: 'translateX(-50%)'
            }}
          >
            <path d="M6.65 2.76v.5h.5v-.5h-.5Zm0-1.96h.5V.3h-.5v.5ZM1.19 3.6v.5h.5v-.5h-.5Zm-.84 0v-.5h-.5v.5h.5Zm0 2.24h-.5v.5h.5v-.5Zm.84 0h.5v-.5h-.5v.5Zm0 6.16h-.5v.5h.5V12Zm2.66 0v.5h.5V12h-.5Zm0-6.16v-.5h-.5v.5h.5Zm2.38 0v.5h.5v-.5h-.5Zm0-2.24h.5v-.5h-.5v.5Zm-2.38 0h-.5v.5h.5v-.5Zm.686-.34H6.65v-1H4.536v1Zm2.614-.5V.8h-1v1.96h1ZM6.65.3h-2.1v1h2.1v-1Zm-2.1 0c-.70745 0-1.30273.027814-1.79314.114358-.49131.086701-.91842.239031-1.25587.518631C.812014 1.50386.69 2.43913.69 3.6h1c0-1.19113.15799-1.65586.44901-1.89699.15255-.1264.39044-.23307.79163-.30387C3.33273 1.32819 3.85745 1.3 4.55 1.3v-1ZM1.19 3.1H.35v1h.84v-1Zm-1.34.5v2.24h1V3.6h-1Zm.5 2.74h.84v-1H.35v1Zm.34-.5V12h1V5.84h-1Zm.5 6.66h2.66v-1H1.19v1Zm3.16-.5V5.84h-1V12h1Zm-.5-5.66h2.38v-1H3.85v1Zm2.88-.5V3.6h-1v2.24h1Zm-.5-2.74H3.85v1h2.38v-1Zm-1.88.5v-.266h-1V3.6h1Zm0-.266c0-.05259.00154-.09245.00414-.12298.00261-.0308.00582-.04592.00699-.05054.00102-.00402-.00137.00744-.01239.02654-.01199.02077-.02983.04298-.0529.062-.04419.03644-.07256.03272-.02526.02467.04797-.00817.12796-.01369.26542-.01369v-1c-.14954 0-.2988.00498-.43327.02787-.13513.02301-.29913.07092-.44307.18961-.3014.24852-.30966.6319-.30966.85652h1Zm2.93656.266v-.5h-.5v.5h.5Zm0 8.4h-.5v.5h.5V12Zm2.66 0v.5h.50004V12h-.50004Zm0-4.998-.5-.00781V7.002h.5Zm2.50604.728h-.5v.5h.5v-.5Zm2.66 0v.5h.5v-.5h-.5Zm0-2.002h.5001l-.0003-.01087-.4998.01087ZM9.94656 5.42h-.5l.98714.1128-.48714-.1128Zm0-1.82h.50004v-.5h-.50004v.5Zm-3.16 0V12h1V3.6h-1Zm.5 8.9h2.66v-1h-2.66v1Zm3.16004-.5V7.002H9.44656V12h1.00004Zm-.0001-4.99019c.0059-.37667.0978-.50265.1614-.5562.0825-.0694.2623-.14161.6687-.14161v-1c-.4757 0-.9539.07479-1.31242.37639-.37734.31744-.50944.78647-.51756 1.3058l.99988.01562Zm.8301-.69781c.2415 0 .4045.00983.5178.02944.1129.01952.1334.04188.1248.03479-.0178-.01464-.0092-.02365.0047.03109.0169.06668.0287.17806.0287.37068h1c0-.3855-.0258-.86694-.3972-1.17324-.1783-.14708-.3897-.21397-.5905-.2487-.2004-.03464-.4329-.04406-.6883-.04406v1Zm.676.466v.952h1v-.952h-1Zm.5 1.452h2.66v-1h-2.66v1Zm3.16-.5V5.728h-1V7.73h1Zm-.0002-2.01287c-.0208-.95776-.1429-1.77072-.7963-2.26144-.3127-.23479-.7015-.35962-1.1423-.43032-.4413-.07079-.9766-.09337-1.6132-.09337v1c.6234 0 1.0943.02292 1.4549.08075.3611.05793.57.14485.7001.24256.232.17428.3759.50932.3971 1.48356l.9997-.02174ZM12.0606 2.932c-.6427 0-1.2202.2022-1.6803.62847-.45201.41873-.75196 1.01744-.92085 1.74673l.97425.2256c.1391-.60071.3641-.996.6262-1.23877.2539-.23523.5793-.36203 1.0007-.36203v-1Zm-1.614 2.488V3.6H9.44656v1.82h1.00004ZM9.94656 3.1h-2.66v1h2.66v-1ZM20.1455 6.032c.7511 0 .9364.1065 1.022.21847.0536.0701.1139.20078.1556.4642.0415.26231.0584.61172.0584 1.08533h1c0-.48539-.0165-.89898-.0707-1.24173-.0541-.34164-.1523-.65809-.3489-.91525-.4149-.54252-1.0976-.61102-1.8164-.61102v1Zm1.236 1.768c0 .47361-.0169.82302-.0584 1.08533-.0417.26342-.102.3941-.1556.46419-.0856.11198-.2709.21848-1.022.21848v1c.7188 0 1.4015-.0685 1.8164-.61103.1966-.25715.2948-.5736.3489-.91524.0542-.34275.0707-.75634.0707-1.24173h-1Zm-1.236 1.768c-.7512 0-.9365-.1065-1.0221-.21848-.0536-.07009-.1139-.20077-.1556-.46419-.0415-.26231-.0583-.61172-.0583-1.08533h-1c0 .48539.0164.89898.0706 1.24173.0541.34164.1523.65809.3489.91524.4149.54253 1.0976.61103 1.8165.61103v-1ZM18.9095 7.8c0-.47361.0168-.82302.0583-1.08533.0417-.26342.102-.3941.1556-.4642.0856-.11197.2709-.21847 1.0221-.21847v-1c-.7189 0-1.4016.0685-1.8165.61102-.1966.25716-.2948.57361-.3489.91525-.0542.34275-.0706.75634-.0706 1.24173h1Zm-3.8 0c0 .92937.0443 1.70614.1827 2.3421.1398.6427.383 1.1764.8052 1.5829.4205.4047.969.6356 1.6281.7684.6547.132 1.4563.1746 2.42.1746v-1c-.9474 0-1.6683-.0431-2.2224-.1549-.5497-.1108-.8963-.2816-1.1321-.5086-.2341-.2253-.4082-.5535-.5217-1.07496-.1149-.52818-.1598-1.21791-.1598-2.12954h-1Zm5.036 4.868c.9636 0 1.7652-.0426 2.4199-.1746.6591-.1328 1.2076-.3637 1.6281-.7684.4222-.4065.6654-.9402.8052-1.5829.1384-.63596.1828-1.41273.1828-2.3421h-1c0 .91163-.045 1.60136-.1599 2.12954-.1135.52146-.2876.84966-.5217 1.07496-.2358.227-.5824.3978-1.1321.5086-.5541.1118-1.275.1549-2.2223.1549v1Zm5.036-4.868c0-.92937-.0444-1.70614-.1828-2.34215-.1398-.6427-.383-1.17637-.8052-1.58281-.4205-.40477-.969-.63559-1.6281-.76846-.6547-.13198-1.4563-.17458-2.4199-.17458v1c.9473 0 1.6682.04315 2.2223.15486.5497.11082.8963.28162 1.1321.5086.2341.22531.4082.55351.5217 1.075.1149.52818.1599 1.21791.1599 2.12954h1Zm-5.036-4.868c-.9637 0-1.7653.0426-2.42.17458-.6591.13287-1.2076.36369-1.6281.76846-.4222.40644-.6654.94011-.8052 1.58281-.1384.63601-.1827 1.41278-.1827 2.34215h1c0-.91163.0449-1.60136.1598-2.12954.1135-.52149.2876-.84969.5217-1.075.2358-.22698.5824-.39778 1.1321-.5086.5541-.11171 1.275-.15486 2.2224-.15486v-1Zm5.5161.668v-.5h-.5v.5h.5Zm0 8.4h-.5v.5h.5V12Zm2.66 0v.5h.5V12h-.5Zm2.66 0h-.5v.5h.5V12Zm2.646 0v.5h.5014l-.0014-.5014-.5.0014Zm-.014-4.942-.4998-.01514-.0003.00827.0001.00829.5-.00142ZM36.2596 12h-.5v.5h.5V12Zm2.646 0v.5h.5013l-.0013-.5013-.5.0013Zm-.014-5.432h-.5v.00129l.5-.00129Zm-5.614-1.19-.4988.035.9859.0778-.4871-.1128Zm-4.956-.168h-.5l.9869.11361-.4869-.11361Zm0-1.61h.5v-.5h-.5v.5Zm-3.16 0V12h1V3.6h-1Zm.5 8.9h2.66v-1h-2.66v1Zm3.16-.5V7.142h-1V12h1Zm0-4.858c0-.42002.0995-.64205.2103-.75949.1055-.11193.2985-.21051.6757-.21051v-1c-.5469 0-1.0469.14642-1.4033.52449-.3513.37256-.4827.88553-.4827 1.44551h1Zm.886-.97c.2604 0 .4316.01339.5481.03858.1103.02384.1335.05027.1346.05146.0023.00235.0299.02976.0538.14744.0249.1225.0375.29953.0375.56452h1c0-.28101-.012-.53973-.0575-.76373-.0465-.22882-.1353-.45866-.3168-.64531-.1826-.18781-.4105-.28213-.6402-.33179-.2235-.04831-.481-.06117-.7595-.06117v1Zm.774.802V12h1V6.974h-1Zm.5 5.526h2.646v-1h-2.646v1Zm3.146-.5014-.014-4.94202-1 .00284.014 4.94198 1-.0028Zm-.0143-4.92546c.0118-.38759.1119-.59166.2213-.70109.1068-.10678.2992-.20005.665-.20005v-1c-.5303 0-1.0169.13773-1.3721.49295-.3526.35257-.4975.8415-.5137 1.37791l.9995.03028Zm.8863-.90114c.2567 0 .4249.01339.5389.03832.1074.0235.1292.04928.1299.05.0023.00235.0299.03023.0538.14856.0248.12287.0374.30023.0374.56512h1c0-.28111-.012-.53951-.0572-.76314-.0461-.22816-.1339-.45753-.3137-.64418-.1813-.18828-.4079-.28325-.6365-.33326-.2221-.04856-.4774-.06142-.7526-.06142v1Zm.76.802V12h1V6.974h-1Zm.5 5.526h2.646v-1h-2.646v1Zm3.146-.5013-.014-5.43199-1 .00258.014 5.43201 1-.0026Zm-.014-5.4307c0-.66623-.0295-1.23187-.1244-1.69977-.0959-.47248-.2657-.88297-.5742-1.2025-.3099-.32108-.7119-.50078-1.1773-.60236-.4588-.10014-1.0124-.13137-1.6621-.13137v1c.6313 0 1.0979.03177 1.4489.10837.3444.07518.5418.18598.6711.3199.1308.13547.2401.34448.3135.70675.0744.36685.1045.85121.1045 1.50098h1Zm-3.538-3.636c-.7765 0-1.4605.16918-2.002.57366-.546.40786-.8876 1.01029-1.0611 1.75954l.9742.2256c.1345-.58075.3739-.95132.6853-1.18396.316-.23602.7661-.37484 1.4036-.37484v-1Zm-2.0773 2.411c-.0566-.80645-.2055-1.5091-.7975-1.94056-.2827-.20606-.6258-.31905-1.01-.38385-.3837-.06473-.8418-.08659-1.3792-.08659v1c.5195 0 .9119.02188 1.2129.07266.3005.05069.4763.12496.5873.2059.1956.14253.3336.41289.389 1.20244l.9975-.07Zm-3.1867-2.411c-.6942 0-1.3105.14242-1.8013.52033-.4932.37974-.7902.94351-.9537 1.64405l.9739.22723c.1305-.55945.3376-.88468.5898-1.07894.2547-.19609.6254-.31267 1.1913-.31267v-1Zm-1.768 2.278V3.6h-1v1.61h1Zm-.5-2.11h-2.66v1h2.66v-1ZM50.038 9.62h.5v-.5h-.5v.5Zm-2.52-3.78v-.5h-.5v.5h.5Zm2.38 0v.5h.5v-.5h-.5Zm0-2.24h.5v-.5h-.5v.5Zm-2.38 0h-.5v.5h.5v-.5Zm0-1.792h.5v-.5h-.5v.5Zm-2.52 0v-.5h-.5v.5h.5Zm0 1.792v.5h.5v-.5h-.5Zm-.98 0v-.5h-.5v.5h.5Zm0 2.24h-.5v.5h.5v-.5Zm.84 0h.5v-.5h-.5v.5Zm5.18 6.16v.5h.5V12h-.5Zm0-2.88h-1.554v1h1.554v-1Zm-1.554 0c-.1949 0-.3191-.00894-.4008-.02435-.0793-.01498-.0773-.02881-.0548-.00886.028.02486.0235.04336.0126-.00232-.0131-.05507-.023-.15028-.023-.31847h-1c0 .33476.0189.77793.3466 1.06871.1625.1442.3552.20999.5331.24359.1756.0331.3751.0417.5863.0417v-1Zm-.466-.354V5.84h-1v2.926h1Zm-.5-2.426h2.38v-1h-2.38v1Zm2.88-.5V3.6h-1v2.24h1Zm-.5-2.74h-2.38v1h2.38v-1Zm-1.88.5V1.808h-1V3.6h1Zm-.5-2.292h-2.52v1h2.52v-1Zm-3.02.5V3.6h1V1.808h-1Zm.5 1.292h-.98v1h.98v-1Zm-1.48.5v2.24h1V3.6h-1Zm.5 2.74h.84v-1h-.84v1Zm.34-.5v3.332h1V5.84h-1Zm0 3.332c0 1.1715.1175 2.1143.8034 2.6896.3371.2827.7648.4363 1.2572.5235.4913.0871 1.0886.1149 1.7994.1149v-1c-.6963 0-1.2225-.0282-1.625-.0995-.4014-.0711-.6378-.1783-.789-.3051-.2906-.2437-.446-.7149-.446-1.9234h-1Zm3.86 3.328h1.82v-1h-1.82v1Zm2.32-.5V9.62h-1V12h1ZM50.8178.8V.3h-.5v.5h.5Zm0 11.2h-.5v.5h.5V12Zm2.66 0v.5h.5V12h-.5Zm0-4.984-.5-.00862V7.016h.5ZM56.4038 12h-.5v.5h.5V12Zm2.66 0v.5h.5013l-.0013-.5013-.5.0013Zm-.014-5.432h-.5v.00129l.5-.00129Zm-5.572-1.26h-.5l.9865.11536-.4865-.11536Zm0-4.508h.5V.3h-.5v.5Zm-3.16 0V12h1V.8h-1Zm.5 11.7h2.66v-1h-2.66v1Zm3.16-.5V7.016h-1V12h1Zm-.0001-4.97538c.0053-.30304.0935-.44574.1938-.5274.1184-.09642.3485-.18522.7763-.18522v-1c-.5381 0-1.0361.1072-1.4077.40978-.3897.31734-.5534.77664-.5622 1.2856l.9998.01724Zm.9701-.71262c.2996 0 .5043.01424.6485.0433.1399.02821.1828.06273.1956.07494.0106.01022.0423.04434.0692.1676.0284.13024.0427.31836.0427.60016h1c0-.2992-.0137-.57483-.0657-.81341-.0536-.24555-.155-.4853-.3543-.67633-.1973-.18904-.4414-.28315-.6899-.33325-.2444-.04925-.5297-.06301-.8461-.06301v1Zm.956.886V12h1V7.198h-1Zm.5 5.302h2.66v-1h-2.66v1Zm3.16-.5013-.014-5.43199-1 .00258.014 5.43201 1-.0026Zm-.014-5.4307c0-.6661-.0286-1.23009-.1195-1.69606-.0915-.4693-.2533-.87814-.5486-1.19808-.2987-.32359-.6876-.50627-1.1378-.60937-.4421-.10126-.9733-.13249-1.5921-.13249v1c.5992 0 1.0393.03177 1.3689.10726.3216.07364.5049.18147.6262.31288.1247.13506.2307.34572.3019.71117.0719.36878.101.85479.101 1.50469h1Zm-3.398-3.636c-.81 0-1.5147.13573-2.0708.51606-.5692.38932-.9093.98368-1.0897 1.74458l.973.23072c.1416-.5971.3755-.94074.6813-1.14992.319-.21817.7903-.34144 1.5062-.34144v-1Zm-2.174 2.376V.8h-1v4.508h1Zm-.5-5.008h-2.66v1h2.66v-1ZM68.793 9.326h.5v-.5h-.5v.5Zm-2.8 0v-.5h-.5v.5h.5Zm-3.15-.63v-.5h-.5v.5h.5Zm6.02 0v.5h.5v-.5h-.5Zm0-1.302h.5001l-.0001-.0063-.5.0063Zm-6.02-.658h-.5v.5h.5v-.5Zm3.22 0v.5h.5063l-.0063-.50617-.5.00617Zm2.73 2.09h-2.8v1h2.8v-1Zm-3.3.5c0 .16477-.015.24062-.0272.27421-.0044.01199-.0002.00525-.006.00865-.0252.01484-.0981.04538-.2739.06768-.1715.02176-.4027.03146-.7189.03146v1c.3279 0 .6095-.0096.8448-.0394.2311-.0293.4592-.0828.6545-.1975.4694-.2756.5267-.75449.5267-1.1451h-1Zm-1.026.382c-.3349 0-.5696-.0151-.7383-.04748-.1659-.03183-.2271-.073-.2515-.09524-.02-.01818-.0561-.05999-.0861-.19011-.032-.13873-.0481-.33857-.0481-.63717h-1c0 .3174.0155.60931.0736.86171.0602.261.1728.50969.3873.70499.2101.1913.4691.2866.7363.3379.2645.0507.5758.0654.9268.0654v-1Zm-1.124-.97v-.042h-1v.042h1Zm-.5.458h6.02v-1h-6.02v1Zm6.52-.5V7.394h-1v1.302h1Zm0-1.3083c-.0106-.84282-.0625-1.55287-.2052-2.13706-.1447-.59271-.39-1.08535-.8058-1.45904-.4115-.36982-.9418-.57943-1.5746-.70023-.6297-.12022-1.3994-.15937-2.3244-.15937v1c.9091 0 1.6024.0396 2.1369.14163.5314.10145.8665.25758 1.0937.46177.2229.20031.3898.48992.5028.95246.115.47106.1663 1.08926.1767 1.91244l.9999-.0126Zm-4.91-4.4557c-.9359 0-1.7168.04259-2.3557.17514-.6442.13364-1.181.36606-1.5921.77261-.4115.40703-.6479.93996-.7839 1.58056-.1348.63475-.1783 1.41044-.1783 2.33969h1c0-.91175.0441-1.60256.1565-2.132.1112-.52359.2817-.85253.5089-1.07725.2277-.2252.5615-.3944 1.092-.50446.5357-.11114 1.2336-.15429 2.1526-.15429v-1ZM59.543 7.8c0 .92925.0435 1.70494.1783 2.3397.136.6406.3724 1.1735.7839 1.5805.4111.4066.9479.639 1.5921.7727.6389.1325 1.4198.1751 2.3557.1751v-1c-.919 0-1.6169-.0432-2.1526-.1543-.5305-.11-.8643-.2793-1.092-.5044-.2272-.2248-.3977-.5537-.5089-1.0773-.1124-.52944-.1565-1.22025-.1565-2.132h-1Zm4.91 4.868c.9189 0 1.6747-.0279 2.2877-.1121.6098-.0837 1.1226-.2285 1.5264-.4928.8662-.567 1.0259-1.5351 1.0259-2.7371h-1c0 1.192-.1832 1.6449-.5735 1.9004-.2245.1469-.5683.2638-1.1148.3388-.5433.0747-1.2435.1028-2.1517.1028v1Zm-1.11-5.932v-.042h-1v.042h1Zm0-.042c0-.5639.0822-.64773.1113-.6712.0241-.01942.0899-.05846.2638-.08797.174-.02952.4129-.04283.7489-.04283v-1c-.3499 0-.657.01293-.9162.05692s-.5136.1257-.724.29528c-.4399.35453-.4838.9217-.4838 1.4498h1Zm1.124-.802c.318 0 .544.01331.7089.04275.1634.02917.2273.06765.2532.08905.0396.03284.1268.13998.134.71837l.9999-.01234c-.0069-.55561-.0666-1.12047-.496-1.47613-.2087-.17285-.4597-.25775-.7154-.30339-.2542-.04537-.5515-.05831-.8846-.05831v1Zm1.596.344h-3.22v1h3.22v-1Zm10.6573-1.124h-.5l.9866.1151-.4866-.1151Zm0-4.312h.5V.3h-.5v.5Zm-2.674 0V.3h-.5v.5h.5Zm0 11.2h-.5v.5h.5V12Zm2.604 0v.5h.5V12h-.5Zm0-2.016.4919-.08986-.9919.08986h.5Zm.084-.938h-.5v.03923l.0061.03875.4939-.07798Zm0-2.17-.4978-.0461-.0022.023v.0231h.5Zm9.996 5.292-.0053-.5001-.01.0003.0153.4998Zm2.618-1.652h.5l-.9755-.1545.4755.1545Zm0 1.484h-.5v.5h.5V12Zm2.66 0v.5h.5V12h-.5Zm-8.246-5.474h-.5v.5h.5v-.5Zm2.66 0v.5h.5147l-.0149-.51449-.4998.01449Zm2.926.476.0027.49999.4973-.00262V7.002h-.5Zm-2.66.014v.50001l.0027-.00002-.0027-.49999Zm.462 1.974v.50001l.0032-.00002-.0032-.49999Zm2.198-.014h.5v-.50319l-.5032.0032.0032.49999Zm-1.624 1.302v.5001l.0119-.0002-.0119-.4999Zm12.012-2.968.1414-.47961-.0028-.0008-.1386.48041Zm-2.744-.602.0806-.49349-.0045-.0007-.0761.49419Zm1.526-.182h-.5v.5h.5v-.5Zm2.6597 0v.5h.5v-.5h-.5Zm-6.7057 1.638-.1817.4658.0028.00107.1789-.46687Zm2.604.616-.098.49037.0086.00156.0894-.49193Zm-1.652.42h.5v-.5h-.5v.5Zm-2.52 0v-.5h-.5v.5h.5Zm18.0457.14h.5v-.5h-.5v.5Zm-2.8 0v-.5h-.5v.5h.5ZM105 8.71v-.5h-.5v.5h.5Zm6.02 0v.5h.5v-.5h-.5ZM105 6.736h-.5v.5h.5v-.5Zm3.22 0v.5h.507l-.007-.50617-.5.00617ZM112.196 12h-.5v.5h.5V12Zm2.66 0v.5h.5V12h-.5Zm2.66 0h-.5v.5h.5V12Zm2.646 0v.5h.502l-.002-.5014-.5.0014Zm-.014-4.942-.499-.01515-.001.00828v.00829l.5-.00142ZM122.78 12h-.5v.5h.5V12Zm2.66 0v.5h.502l-.002-.5013-.5.0013Zm-.014-5.432h-.5v.00129l.5-.00129Zm-5.614-1.19-.498.035.985.0778-.487-.1128Zm-4.956-.168h-.5l.987.11361-.487-.11361Zm0-1.596h.5v-.5h-.5v.5Zm-2.66 0v-.5h-.5v.5h.5Zm23.016 5.726h.5v-.5h-.5v.5Zm-2.786 0v-.5h-.5v.5h.5Zm-3.164-.63v-.5h-.5v.5h.5Zm6.02 0v.5h.5v-.5h-.5Zm-6.02-1.974h-.5v.5h.5v-.5Zm3.234 0v.5h.507l-.007-.50617-.5.00617ZM136.444 12h-.5v.5h.5V12Zm2.66 0v.5h.5V12h-.5Zm0-4.998-.5-.00781V7.002h.5ZM142.03 12h-.5v.5h.5V12Zm2.66 0v.5h.502l-.002-.5013-.5.0013Zm-.014-5.432h-.5v.00129l.5-.00129Zm-5.572-1.26h-.5l.987.11536-.487-.11536Zm0-1.694h.5v-.5h-.5v.5Zm-2.66 0v-.5h-.5v.5h.5Zm8.932 2.226h-.5v.5h.5v-.5Zm.826 0h.5v-.5h-.5v.5Zm5.18 6.16v.5h.5V12h-.5Zm0-2.38h.5v-.5h-.5v.5Zm-2.52-3.78v-.5h-.5v.5h.5Zm2.394 0v.5h.5v-.5h-.5Zm0-2.226h.5v-.5h-.5v.5Zm-2.394 0h-.5v.5h.5v-.5Zm0-1.806h.5v-.5h-.5v.5Zm-2.52 0v-.5h-.5v.5h.5Zm0 1.806v.5h.5v-.5h-.5Zm-.966 0v-.5h-.5v.5h.5ZM152.39 12h-.5v.5h.5V12Zm2.394 0v.5h.5V12h-.5Zm0-2.38h.5v-.5h-.5v.5Zm-2.394 0v-.5h-.5v.5h.5ZM77.2203 5.112V.8h-1v4.312h1Zm-.5-4.812h-2.674v1h2.674v-1Zm-3.174.5V12h1V.8h-1Zm.5 11.7h2.604v-1h-2.604v1Zm3.104-.5V9.984h-1V12h1Zm-.9918-1.9261c.1486.8136.4892 1.4807 1.0615 1.9385.5693.4555 1.3077.6556 2.1603.6556v-1c-.7013 0-1.1949-.1639-1.5356-.4364-.3377-.2702-.5852-.6951-.7025-1.33746l-.9837.17976Zm3.2218 2.5941c1.2979 0 2.3249-.1412 2.9628-.878.315-.3639.4959-.829.6014-1.376.1051-.54513.1418-1.20747.1418-1.998h-1c0 .77047-.0367 1.35762-.1237 1.8087-.0866.4492-.2163.7269-.3755.9108-.3106.3587-.8866.5325-2.2068.5325v1Zm3.706-4.252V7.198h-1v1.218h1Zm0-1.218c0-.79381-.0358-1.45653-.137-2.00067-.1014-.54513-.2748-1.00837-.5774-1.37142-.618-.74169-1.6142-.87991-2.8516-.87991v1c1.2547 0 1.7915.16978 2.0834.52009.1525.18295.2783.46171.3624.91407.0843.45337.1202 1.04365.1202 1.81784h1Zm-3.566-4.252c-.8569 0-1.59.08886-2.1594.40887-.6059.34051-.9507.89622-1.1271 1.64203l.9731.2302c.1316-.55619.3468-.83348.6439-1.00047.3336-.18749.8465-.28063 1.6695-.28063v-1Zm-2.286 6.1v-2.17h-1v2.17h1Zm-.0021-2.1239c.0252-.27195.115-.40625.2251-.48792.1288-.09542.3657-.17818.789-.17818v-1c-.5287 0-1.0127.09924-1.3845.37482-.3903.28933-.5805.71503-.6253 1.19908l.9957.0922Zm1.0141-.6661c.3105 0 .5231.01754.6722.05105.1432.03218.1943.07171.2161.09407.0225.02295.0608.07579.0912.21984.0314.14945.0465.35872.0465.66104h1c0-.32068-.0146-.61367-.068-.86715-.0546-.25889-.1562-.50967-.3543-.71247-.1986-.20339-.4485-.31174-.7122-.37099-.2578-.05793-.558-.07539-.8915-.07539v1Zm1.026 1.026V8.36h1V7.282h-1Zm0 1.078c0 .29502-.0151.49827-.0461.64288-.0298.13872-.0672.18889-.0888.21072-.0218.02194-.0736.06145-.2179.09356-.1497.03333-.3628.05084-.6732.05084v1c.3337 0 .6333-.0175.8905-.0747.2626-.0585.5118-.1651.7105-.3654.1988-.20042.3015-.44863.3566-.70497.0538-.25045.0684-.53895.0684-.85293h-1Zm-1.026.998c-.4307 0-.6915-.06621-.8368-.14545-.119-.06493-.1644-.1374-.1813-.24453l-.9878.15596c.0671.42487.3088.7584.6903.96642.3552.1938.8083.2676 1.3156.2676v-1Zm4.736.22c0 .577.0311 1.0783.137 1.4961.1089.4298.3039.7984.646 1.0716.3324.2654.7521.399 1.2294.467.4772.068 1.0583.0763 1.7509.0551l-.0306-.9996c-.6793.0208-1.1903.0099-1.5793-.0455-.3889-.0554-.6098-.1493-.7464-.2584-.1268-.1013-.2293-.2542-.3007-.5358-.0743-.2935-.1063-.6935-.1063-1.2505h-1Zm3.7533 3.09c.7186-.0077 1.378-.153 1.9212-.4844.5522-.337.9503-.8463 1.167-1.5131l-.951-.309c-.1473.4532-.4002.7629-.7369.9684-.3458.2111-.8134.3318-1.4109.3381l.0106 1Zm2.1127-2.152V12h1v-1.484h-1Zm.5 1.984h2.66v-1h-2.66v1Zm3.16-.5V6.344h-1V12h1Zm0-5.656c0-1.20968-.1284-2.17944-.8771-2.76229-.3619-.28173-.8213-.4341-1.3559-.52096-.5353-.08696-1.1902-.11475-1.977-.11475v1c.7743 0 1.3636.02821 1.8166.10181.4537.0737.7267.18646.902.32298.3259.25365.4914.73289.4914 1.97321h1Zm-4.21-3.398h-.644v1h.644v-1Zm-.644 0c-.8249 0-1.5074.02696-2.0634.1093-.5537.082-1.026.22472-1.3992.48779-.7905.55728-.9294 1.49594-.9294 2.64691h1c0-1.15903.1691-1.59237.5056-1.82959.1904-.13418.4863-.24433.9695-.3159.4809-.07122 1.1038-.09851 1.9169-.09851v-1Zm-4.392 3.244v.336h1V6.19h-1Zm.5.836h2.66v-1h-2.66v1Zm3.1598-.51449c-.0067-.23015.0052-.36441.0261-.44584.0093-.03636.0182-.05243.0214-.05757.0022-.00354.0037-.00543.0087-.00906.0155-.01148.0748-.04562.2462-.07116.1687-.02515.3999-.03588.7238-.03588v-1c-.334 0-.6261.01027-.8712.04681-.2425.03614-.4877.10438-.6927.25565-.4501.33221-.4754.87893-.4619 1.34603l.9996-.02898Zm1.0262-.61951c.2881 0 .489.01075.6333.03463.1443.02389.1875.05423.195.06023.0023.0019.0046.0039.0087.01079.0051.00854.0152.02879.0257.06933.023.08838.0373.22841.0373.45902h1c0-.46388-.0364-.99078-.4462-1.31936-.1955-.15675-.4288-.22879-.6573-.26659-.2284-.0378-.4965-.04805-.7965-.04805v1Zm.9.634v.476h1v-.476h-1Zm.4974-.02399-2.66.014.0053.99998 2.66-.014-.0053-.99998Zm-2.6574.01399c-.6822 0-1.2541.02518-1.7236.10403-.4694.07884-.8799.21796-1.205.47804-.6703.53629-.7774 1.41907-.7774 2.47993h1c0-1.09515.145-1.49336.4021-1.69907.1387-.11092.3609-.20805.7459-.27271.3849-.06465.8893-.09022 1.558-.09022v-1Zm.094 3.09c0-.116.0091-.16065.0124-.17169.0004-.00143-.0032.01101-.0156.02935-.0132.01956-.03.03626-.0468.0481-.0282.01998-.0305.00808.0493-.00386.0776-.01162.1928-.0179.3687-.0179v-1c-.188 0-.3634.00597-.5167.02891-.1512.02262-.3251.0676-.4793.17683-.3515.24902-.372.65394-.372.91026h1Zm.3712-.11601 2.198-.014-.0064-.99998-2.198.014.0064.99998Zm1.6948-.51399v.364h1v-.364h-1Zm0 .364c0 .10926-.0187.16391-.0323.1903-.0111.02132-.0309.04878-.0877.08137-.1418.08146-.4365.15268-1.0159.16647l.0238.99976c.5967-.0142 1.114-.083 1.4901-.2991.2023-.1161.3679-.2768.4777-.48867.107-.20679.1443-.43039.1443-.65013h-1Zm-1.124.438h-.14v1h.14v-1Zm-.14 0c-.2682 0-.4638-.00707-.6089-.02319-.15-.01667-.2073-.03937-.2214-.04669-.003-.00153.0063.00291.0187.01628.0127.01375.0195.02682.0218.03248.0008.00186-.0122-.03173-.0122-.15088h-1c0 .16085.0133.35126.0876.5316.0836.2032.2289.3572.4238.4583.1749.0907.3748.131.5713.1528.2014.0224.4415.0293.7193.0293v-1Zm4.82-.396c0 1.1588.1301 2.1007.8765 2.6679.3583.2722.8119.4203 1.3396.5052.5288.0851 1.1753.1129 1.9519.1129v-1c-.7633 0-1.3453-.0282-1.7931-.1002-.4487-.0722-.7196-.1821-.8934-.3142-.3175-.2413-.4815-.6924-.4815-1.8716h-1Zm4.168 3.286h.644v-1h-.644v1Zm.644 0c.887 0 1.6135-.0244 2.2011-.0965.5836-.0715 1.0726-.1944 1.4596-.4192.407-.2367.672-.5701.826-.9959.145-.4034.185-.8762.185-1.3964h-1c0 .4878-.04.82-.126 1.0571-.077.2147-.193.3573-.388.4706-.215.1252-.5485.2263-1.0783.2913-.5253.0644-1.2024.089-2.0794.089v1Zm4.6717-2.908c0-.67215-.081-1.30027-.401-1.82232-.331-.54035-.868-.88874-1.6093-1.10728l-.2827.9592c.589.17346.878.40607 1.04.67072.173.28295.253.68383.253 1.29968h1Zm-2.0131-2.93041c-.7457-.2151-1.409-.38763-2.802-.61506l-.1611.98694c1.351.22057 1.9756.38404 2.6859.58894l.2772-.96082Zm-2.8065-.61578c-.4551-.07-.6596-.13727-.7461-.18779-.031-.01812-.0182-.01811-.0028.00929.0153.02705.0108.04142.0108.01469h-1c0 .14827.0271.31489.118.47625.0912.16172.2238.2781.3696.36323.267.15598.6434.24271 1.0984.31271l.1521-.98838ZM96.3303 6.05c0-.09059.0134-.11026.0083-.10002-.0116.02347-.0297.03123-.0152.02398.0273-.01362.0958-.03778.2415-.05576.1423-.01756.3307-.0262.5814-.0262v-1c-.5038 0-.9499.02744-1.2701.18754-.185.0925-.3378.23238-.4343.42779-.0899.18218-.1116.37426-.1116.54267h1Zm.816-.158c.258 0 .4481.01199.589.03488.1425.02313.2055.053.2297.06865.0124.00805.0164.01153.0242.03157.0129.03348.0291.1049.0291.2469h1c0-.40312-.0871-.84432-.5101-1.11804-.3469-.22446-.8327-.26396-1.3619-.26396v1Zm.872.382v.252h1v-.252h-1Zm.5.752h2.6597v-1h-2.6597v1Zm3.1597-.5v-.252h-1v.252h1Zm0-.252c0-1.1837-.129-2.13851-.882-2.71003-.361-.27452-.8197-.42237-1.3528-.50662-.5343-.08443-1.1884-.11135-1.9749-.11135v1c.7745 0 1.3647.02733 1.8188.09909.4551.07193.7289.18221.9049.31544.321.24398.486.70317.486 1.91347h1Zm-4.2097-3.328h-.644v1h.644v-1Zm-.644 0c-.7994 0-1.4616.02345-2.0011.09713-.5364.07323-.9964.2014-1.3622.44177-.7887.5183-.9307 1.40593-.9307 2.4811h1c0-1.06683.1661-1.4392.4799-1.6454.1854-.12188.4753-.22209.9482-.28667.4698-.06413 1.0764-.08793 1.8659-.08793v-1Zm-4.294 3.02c0 .59398.0757 1.14224.3644 1.61258.2941.47916.7632.80432 1.3959 1.05121l.3635-.93158c-.5153-.20111-.7673-.41495-.9072-.64279-.1452-.23666-.2166-.5634-.2166-1.08942h-1Zm1.7631 2.66487c.8923.34206 2.2387.55018 2.6849.63942l.1961-.98058c-.5338-.10676-1.7354-.29064-2.5231-.59258l-.3579.93374Zm2.6935.64106c.6121.1113.9223.21246 1.0722.29547.0673.0373.0704.05406.0593.03706-.0155-.02375-.0161-.04596-.0161-.04046h1c0-.1625-.0373-.33871-.1464-.50596-.1047-.1605-.2522-.27674-.4123-.36544-.3052-.16899-.7579-.29183-1.3778-.40454l-.1789.98387Zm1.1154.29207c0 .0776-.0132.08226-.001.06131.0172-.02945.0346-.0277-.0057-.0106-.1235.05238-.404.09329-1.0193.09329v1c.5888 0 1.0713-.0291 1.4098-.1727.1907-.0809.3638-.2087.479-.4061.1102-.18896.1372-.3908.1372-.5652h-1Zm-1.026.144c-.6638 0-.9599-.0529-1.0894-.11809-.0237-.01193-.0328-.02032-.035-.02238-.0014-.00141-.0023-.00234-.0042-.0062-.0058-.01162-.0234-.05767-.0234-.17933h-1c0 .20034.0262.41854.1268.6222.1069.2165.2762.3732.4861.4789.3711.1868.9009.2249 1.5391.2249v-1Zm-1.152-.326V9.2h-1v.182h1Zm-.5-.682h-2.52v1h2.52v-1Zm-3.02.5v.182h1V9.2h-1ZM101.7 7.814c0 .92498.04 1.69498.164 2.3241.124.6328.34 1.1624.722 1.5701.385.4107.89.6475 1.495.7832.598.134 1.327.1766 2.193.1766v-1c-.848 0-1.487-.0432-1.974-.1524-.48-.1075-.779-.2715-.984-.4908-.208-.2223-.367-.552-.471-1.07944-.104-.53109-.145-1.22234-.145-2.13136h-1Zm4.574 4.854h.644v-1h-.644v1Zm.644 0c.857 0 1.564-.0278 2.138-.1125.573-.0844 1.059-.2309 1.442-.4999.81-.5696.952-1.5303.952-2.7156h-1c0 1.1947-.173 1.648-.527 1.8974-.2.1405-.51.2547-1.012.3288-.5.0736-1.148.1018-1.993.1018v1Zm4.032-3.828h-2.8v1h2.8v-1Zm-3.3.5c0 .16086-.015.2326-.026.26275-.003.00817.003.00128-.005.00551-.027.01554-.102.04612-.281.06836-.174.02169-.408.03138-.728.03138v1c.332 0 .615-.0096.852-.0391.232-.0289.461-.0815.656-.1937.215-.1235.361-.3027.444-.52426.074-.19954.088-.4148.088-.61094h-1Zm-1.04.368c-.331 0-.563-.01508-.73-.04719-.163-.03156-.224-.07223-.247-.0939-.02-.01761-.055-.05844-.085-.1864-.032-.13658-.048-.33366-.048-.62851h-1c0 .31415.016.60357.074.85418.06.25923.172.50632.386.70042.209.1901.466.285.731.3362.263.0505.572.0652.919.0652v-1Zm-1.11-.956V8.71h-1v.042h1Zm-.5.458h6.02v-1H105v1Zm6.52-.5V7.394h-1V8.71h1Zm0-1.316c0-.8418-.04-1.54856-.166-2.12877-.127-.58692-.35-1.07921-.741-1.45513-.389-.37419-.895-.58523-1.496-.70599-.597-.11989-1.326-.15811-2.199-.15811v1c.857 0 1.505.03878 2.002.13852.492.09886.795.25007 1 .44638.202.19458.356.48104.457.94674.103.47242.143 1.09216.143 1.91636h1Zm-4.602-4.448h-.644v1h.644v-1Zm-.644 0c-.866 0-1.594.04166-2.192.17468-.605.13473-1.111.37047-1.496.78162-.382.40798-.598.93881-.722 1.57398-.124.63163-.164 1.40588-.164 2.33772h1c0-.91616.041-1.61191.145-2.14578.104-.53033.263-.8605.471-1.08252.205-.21885.503-.38211.983-.48888.488-.10848 1.127-.15082 1.975-.15082v-1Zm-.774 3.79v-.042h-1v.042h1Zm0-.042c0-.56387.082-.64891.111-.67235.024-.01892.088-.0576.259-.08695.172-.02939.408-.0427.74-.0427v-1c-.346 0-.651.01293-.909.05705-.257.04414-.511.12621-.72.2963-.437.35456-.481.92052-.481 1.44865h1Zm1.11-.802c.322 0 .551.01331.718.04289.166.02935.231.0682.258.09007.04.03282.127.13876.134.71721l1-.01234c-.007-.55555-.066-1.12161-.499-1.47729-.21-.17239-.462-.25691-.719-.30237-.256-.04523-.555-.05817-.892-.05817v1Zm1.61.344H105v1h3.22v-1Zm3.976 6.264h2.66v-1h-2.66v1Zm3.16-.5V7.142h-1V12h1Zm0-4.858c0-.42002.1-.64205.211-.75949.105-.11193.298-.21051.675-.21051v-1c-.547 0-1.046.14642-1.403.52449-.351.37256-.483.88553-.483 1.44551h1Zm.886-.97c.257 0 .426.01336.542.0385.11.02379.135.05044.137.05323.004.00368.032.03217.057.14871.025.12155.038.29784.038.56156h1c0-.28228-.013-.54174-.06-.76669-.048-.22996-.139-.45872-.321-.64404-.183-.18621-.41-.28031-.639-.33002-.222-.04836-.478-.06125-.754-.06125v1Zm.774.802V12h1V6.974h-1Zm.5 5.526h2.646v-1h-2.646v1Zm3.146-.5014-.014-4.94202-1 .00284.014 4.94198 1-.0028Zm-.014-4.92545c.012-.3876.112-.59167.221-.7011.107-.10678.3-.20005.665-.20005v-1c-.53 0-1.017.13773-1.372.49295-.352.35257-.497.8415-.513 1.3779l.999.0303Zm.886-.90115c.257 0 .424.01342.536.03815.053.01171.084.02396.101.03255.016.00773.021.01277.022.01411.001.00104.028.02834.051.1485.025.12421.036.30262.036.56869h1c0-.27993-.011-.53727-.054-.75956-.044-.22634-.129-.45629-.306-.64425-.18-.1904-.406-.28627-.634-.33659-.222-.04877-.477-.0616-.752-.0616v1Zm.746.802V12h1V6.974h-1Zm.5 5.526h2.66v-1h-2.66v1Zm3.16-.5013-.014-5.43199-1 .00258.014 5.43201 1-.0026Zm-.014-5.4307c0-.66616-.029-1.23109-.124-1.69788-.096-.4715-.266-.88081-.576-1.19878-.31-.31922-.712-.49658-1.177-.59648-.458-.09854-1.011-.12886-1.661-.12886v1c.632 0 1.099.03093 1.451.10652.345.07422.542.18386.671.31614.13.13353.239.34022.312.70084.074.36534.104.84866.104 1.4985h1Zm-3.538-3.622c-.774 0-1.458.16468-2 .56509-.547.4044-.889 1.0042-1.063 1.75411l.974.2256c.135-.58009.374-.94629.684-1.17539.315-.23309.766-.36941 1.405-.36941v-1Zm-2.077 2.397c-.056-.80624-.205-1.50802-.802-1.93588-.284-.20355-.629-.314-1.014-.3771-.384-.06307-.844-.08402-1.385-.08402v1c.524 0 .92.02105 1.224.07085.303.04978.48.12308.592.20303.194.13914.332.40336.388 1.19312l.997-.07Zm-3.201-2.397c-.685 0-1.298.13827-1.787.51221-.493.37623-.79.93707-.954 1.63818l.974.22722c.131-.55889.337-.88005.587-1.07082.253-.19306.62-.30679 1.18-.30679v-1Zm-1.754 2.264V3.614h-1V5.21h1Zm-.5-2.096h-2.66v1h2.66v-1Zm-3.16.5V12h1V3.614h-1Zm14.28 4.2c0 .92495.04 1.69505.164 2.3243.125.633.342 1.1628.724 1.5704.386.4106.892.6472 1.5.7828.6.1339 1.33.1765 2.2.1765v-1c-.852 0-1.493-.0432-1.982-.1525-.482-.1076-.783-.2718-.989-.4912-.208-.2224-.368-.5519-.472-1.07911-.104-.53099-.145-1.22214-.145-2.13119h-1Zm4.588 4.854h.644v-1h-.644v1Zm.644 0c.85 0 1.552-.0278 2.123-.1126.569-.0844 1.052-.2312 1.433-.5006.806-.5698.948-1.5296.948-2.7148h-1c0 1.1948-.173 1.649-.525 1.8982-.198.1401-.505.2541-1.003.328-.496.0736-1.138.1018-1.976.1018v1Zm4.004-3.828h-2.786v1h2.786v-1Zm-3.286.5c0 .16075-.015.23294-.026.26354-.003.00889.002.00181-.004.00558-.026.01504-.1.04541-.276.06757-.172.02162-.404.03131-.72.03131v1c.328 0 .61-.0096.845-.0391.23-.0291.457-.0818.652-.1945.214-.124.359-.3035.441-.52425.074-.19909.088-.4139.088-.61015h-1Zm-1.026.368c-.338 0-.576-.01508-.747-.0475-.169-.03197-.232-.07349-.258-.09608-.02-.01788-.055-.05819-.085-.18495-.032-.13594-.048-.33245-.048-.62747h-1c0 .31398.016.60397.075.85522.06.26042.175.50798.391.70188.211.1891.471.2832.739.334.265.0502.579.0649.933.0649v-1Zm-1.138-.956V8.71h-1v.042h1Zm-.5.458h6.02v-1h-6.02v1Zm6.52-.5V7.394h-1V8.71h1Zm0-1.316c0-.84186-.04-1.54841-.165-2.12838-.127-.58648-.349-1.07852-.738-1.45449-.387-.37453-.89-.58593-1.488-.70689-.593-.12002-1.317-.15824-2.183-.15824v1c.85 0 1.493.03878 1.985.13838.487.09867.788.24952.991.44549.201.19453.354.48124.455.94739.103.47265.143 1.0926.143 1.91674h1Zm-4.574-4.448h-.644v1h.644v-1Zm-.644 0c-.869 0-1.6.04166-2.2.1746-.607.13462-1.114.37015-1.5.78116-.383.408-.599.93898-.724 1.57435-.124.63173-.164 1.40608-.164 2.33789h1c0-.91619.041-1.61184.145-2.14561.104-.53013.264-.86015.472-1.08215.206-.21899.506-.38246.988-.48934.49-.10856 1.131-.1509 1.983-.1509v-1Zm-.802 3.79v-.042h-1v.042h1Zm0-.042c0-.56392.083-.64656.112-.67007.025-.01992.092-.05931.269-.08898.176-.02964.418-.04295.757-.04295v-1c-.353 0-.662.01294-.923.0568-.261.04383-.516.12519-.728.29427-.443.35449-.487.92285-.487 1.45093h1Zm1.138-.802c.318 0 .544.01331.709.04275.164.02917.228.06765.253.08905.04.03284.127.13998.134.71837l1-.01234c-.007-.55561-.066-1.12047-.496-1.47613-.208-.17285-.459-.25775-.715-.30339-.254-.04537-.552-.05831-.885-.05831v1Zm1.596.344h-3.234v1h3.234v-1Zm3.948 6.264h2.66v-1h-2.66v1Zm3.16-.5V7.002h-1V12h1Zm0-4.99019c.006-.36012.104-.5391.213-.63716.117-.10577.34-.20065.757-.20065v-1c-.548 0-1.054.12212-1.426.45735-.381.34293-.535.82896-.544 1.36484l1 .01562Zm.97-.83781c.3 0 .501.0152.641.04579.133.02907.173.06401.187.07904.017.01727.054.06663.084.2164.03.15388.044.3704.044.68477h1c0-.32963-.013-.62586-.063-.87886-.051-.2571-.147-.50874-.341-.71197-.195-.20547-.442-.31053-.698-.36634-.248-.05428-.537-.06883-.854-.06883v1Zm.956 1.026V12h1V7.198h-1Zm.5 5.302h2.66v-1h-2.66v1Zm3.16-.5013-.014-5.43199-1 .00258.014 5.43201 1-.0026Zm-.014-5.4307c0-.66603-.028-1.22932-.119-1.69416-.092-.46829-.254-.87598-.55-1.19439-.299-.3218-.689-.5021-1.138-.6035-.442-.09963-.972-.12995-1.591-.12995v1c.6 0 1.041.03093 1.371.10543.322.07272.505.17942.626.30912.124.13309.229.3414.3.70524.072.36728.101.85224.101 1.50221h1Zm-3.398-3.622c-.814 0-1.519.13116-2.074.50804-.57.38665-.906.97924-1.086 1.7386l.973.23072c.142-.59864.373-.93705.674-1.1419.317-.21462.787-.33546 1.513-.33546v-1Zm-2.174 2.362V3.614h-1v1.694h1Zm-.5-2.194h-2.66v1h2.66v-1Zm-3.16.5V12h1V3.614h-1Zm9.432 2.726h.826v-1h-.826v1Zm.326-.5v3.346h1V5.84h-1Zm0 3.346c0 1.1651.118 2.1047.805 2.678.337.2815.764.4344 1.256.5214.491.0868 1.089.1146 1.799.1146v-1c-.696 0-1.222-.0282-1.625-.0993-.401-.071-.638-.1779-.789-.3042-.29-.2422-.446-.7096-.446-1.9105h-1Zm3.86 3.314h1.82v-1h-1.82v1Zm2.32-.5V9.62h-1V12h1Zm-.5-2.88h-1.54v1h1.54v-1Zm-1.54 0c-.198 0-.326-.00892-.411-.02454-.083-.01532-.083-.02999-.061-.01127.028.02464.025.04467.015.00335-.013-.05168-.023-.14301-.023-.30754h-1c0 .32929.019.77201.354 1.06081.163.14122.356.20529.534.23809.177.0325.378.0411.592.0411v-1Zm-.48-.34V5.84h-1v2.94h1Zm-.5-2.44h2.394v-1h-2.394v1Zm2.894-.5V3.614h-1V5.84h1Zm-.5-2.726h-2.394v1h2.394v-1Zm-1.894.5V1.808h-1v1.806h1Zm-.5-2.306h-2.52v1h2.52v-1Zm-3.02.5v1.806h1V1.808h-1Zm.5 1.306h-.966v1h.966v-1Zm-1.466.5V5.84h1V3.614h-1Zm7.514 8.886h2.394v-1h-2.394v1Zm2.894-.5V9.62h-1V12h1Zm-.5-2.88h-2.394v1h2.394v-1Zm-2.894.5V12h1V9.62h-1Z" />
          </svg>
        </div>
      </div>
    </main>
  )
}

LinearLantern.getLayout = ({ Component, title, description, slug }) => {
  return (
    <>
      <NavigationLayout title={title} description={description} slug={slug}>
        <Component />
      </NavigationLayout>
    </>
  )
}

export const title = 'Linear Lantern'
export const tags = ['example']

export default LinearLantern
