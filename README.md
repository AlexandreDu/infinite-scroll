# Live version
https://infinite-scroll-kappa-two.vercel.app/


# Built With

axios: 1.2.2,
react: 18.2.0,
react-dom: 18.2.0,
react-intersection-observer: 9.4.1,
react-router-dom: 6.6.2,
styled-components: 5.3.6


# About The Project

A web app built with React 18, styled-components and Typescript 4.9, displaying an images's gallery of unplash pictures with infinite scroll feature. 

useInfiniteScroll.tsx : Custom hook that returns a ref created by the hook useInView (react-intersection-observer). This ref must be attached to the last Card of the gallery. When this last card is in the viewport, onChange options argument of useInView is called and increments the state page -> the useEffect with page in dependecies array is called, I fetch the new pictures and I add these ones to the current pictures array. 


# Contact
If you want to contact me : alexandre.dutay@outlook.fr
