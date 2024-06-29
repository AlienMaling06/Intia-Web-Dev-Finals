const timelineData = [
   { year: "PRE-SPANISH PERIOD", content: "In the 15th century, Filipinos primarily engaged in shifting cultivation, hunting, and fishing. Sedentary cultivation was rare, except in the mountainous regions of northern Luzon where rice terraces were built. Lowland communities lived in extended kinship groups called barangays, led by a datu (chieftain). The social system had three broad classes: nobility, freeholders, and “dependents” (including sharecroppers, debt peons, and war captives). Early Filipinos followed a mix of monotheistic and polytheistic local religions, with no clear religious hierarchy. In the 15th century, Islam was introduced to Mindanao and the Sulu Archipelago, leading to changes in beliefs and institutions. Spanish arrival disrupted this wave of Islamic proselytism, shaping the Philippines’ history." },

   { year: "SPANISH PERIOD", content: "Initially seeking access to the Spice Islands, the Spanish established permanent settlements in Cebu (1565) and Manila (1571). Spanish control expanded along the coast and lowlands through a system similar to encomienda. Despite efforts, Muslim communities in Mindanao and Sulu resisted Spanish rule. Encomienda abuses led to its abandonment by the late 17th century. Manila, with its governor-general, dominated politically and economically, especially through the galleon trade with Mexico. A vibrant Chinese community thrived in Manila, influencing commerce. The Spanish aimed for Christianization and Hispanization, but local practices persisted. Traditional structures like barangays endured, while agricultural practices evolved." },

   { year: "19TH CENTURY", content: "The end of the galleon trade monopoly to Acapulco (1815) and Manila’s opening to foreign merchants (1830s) stimulated trade. Demand for Philippine sugar and hemp grew, aided by the completion of the Suez Canal (1869). Commercial agriculture led to new landholding classes, including influential Chinese-Filipino mestizo hacienda owners. Public education began in 1863, but Spanish literacy remained limited due to church control. Wealthy Filipinos fostered nationalism and reform through movements like the Propaganda Movement. José Rizal, a key figure, advocated for reforms under Spanish rule. The Katipunan, formed by Andres Bonifacio in 1892, aimed for Philippine independence through armed revolt." },

   { year: "PHILIPPINE REVOLUTION", content: "In August 1896, the discovery of Katipunan plans by the Spanish led to early rebellion. Provinces around Manila revolted, but Spanish retaliation forced rebels into retreat by December 1897. Emilio Aguinaldo and other leaders sought refuge in Hong Kong, but promised reforms never materialized. The U.S. victory in the Battle of Manila Bay (May 1898) brought Aguinaldo back, and he declared independence on June 12. The Malolos Congress drafted a constitution, forming the “Malolos Republic” with Aguinaldo as president (January 1899). U.S. troops cooperated with Filipinos against Spain but barred them from Manila. The Treaty of Paris (December 1898) ceded the Philippines to the U.S., sparking the Philippine-American War (February 1899). After two years of conflict, Aguinaldo was captured, conceding to U.S. rule. However, Filipino aspirations for independence and social change persisted despite American administration." },

   { year: "U.S INFLUENCE", content: "The clash between U.S. democracy and imperial rule created tension, as training Filipinos for self-rule justified U.S. hegemony, sidelining the Malolos Republic. Political parties debated the pace of autonomy. President McKinley’s 1899 commission acknowledged Filipino desire for independence, while Taft’s Second Philippine Commission established civil government by 1901 and led to a bicameral legislature by 1907. The U.S. retained control over defense and foreign affairs. Education improved literacy, but economic reforms faced challenges. The Nacionalista Party played a key role in political evolution. Acts like the Tydings-McDuffie Act (1934) established a 10-year commonwealth, with the Philippines adopting a constitution in 1935 for self-governance." },

   { year: "WORLD WAR II", content: "Japanese aggression in China prompted military readiness in the Philippines. Gen. Douglas MacArthur was called by President Quezon to prepare defenses. The Japanese attacked on December 8, 1941, catching the U.S. off guard. Quezon and Osmeña were evacuated to Corregidor Island. Filipino and American forces surrendered in May 1942. An Executive Commission cooperated with Japanese authorities. The “independent Philippine Republic” under José Laurel replaced the Executive Commission. Guerrilla units formed across the Philippines, with communist-led Hukbalahap in central Luzon. U.S. landings on Leyte led to MacArthur restoring civil government. Manuel A. Roxas became the last chief executive of the commonwealth. The Republic of the Philippines was established on July 4, 1946." },

   { year: "EARLY REPUBLIC", content: "After World War II, Manuel Roxas granted amnesty to major collaborators with Japan. The 1949 election attempted to use the collaboration issue against José Laurel, but blurred lines in Philippine politics hindered its impact. Manila and the economy struggled in the war’s aftermath. Roxas accepted U.S. conditions for aid, including the Bell Act. Strong military ties with the U.S. persisted, but the bases became a point of friction, leading to their closure in 1992. Domestic politics faced challenges, including dissent repression and electoral fraud under Elpidio Quirino, fueling the communist-led Huk Rebellion, which was suppressed with U.S. military support." },

   { year: "EARLY & POST-MARCOS", content: "Ferdinand Marcos, who served as the Philippine president from 1965 to 1986, faced economic challenges due to corruption, tax evasion, and smuggling. During his rule, he aimed to shift the Philippines’ identity toward an Asian cultural focus, reviving pre-Spanish themes and promoting Pilipino as a national language. Despite calls for better governance, Marcos faced resistance when attempting to extend his presidency through a new parliamentary system." },

   { year: "MARTIAL LAW", content: "Ferdinand Marcos declared martial law in September 1972, citing rising disorder due to student demonstrations, communist insurgency threats by the Communist Party of the Philippines (CPP), and the Muslim separatist movement. He arrested opposition politicians and faced a separatist rebellion in Muslim areas. While martial law reduced urban crime and suppressed insurgency, it also consolidated power. Disillusionment grew, and economic challenges persisted. Elections in 1978 faced controversy, and Marcos won an uncontested 1981 election after suspending martial law." },

   { year: "DOWNFALL OF MARCOS ADMINISTRATION", content: "In August 1983, Benigno Aquino's assassination sparked widespread opposition to Marcos's rule, leading to a snap presidential election in February 1986. Corazon Aquino, his widow, emerged as the opposition leader. Despite Marcos's official win, public outcry triggered a revolt that ousted him, allowing Aquino to assume the presidency. She abolished the 1973 constitution and ruled by decree until a new constitution was ratified in February 1987, restoring a bicameral congress. Her administration faced challenges like economic turmoil, insurgency, coup attempts, and natural disasters, amid growing criticism of weak leadership, corruption, and human rights abuses, which weakened her support by the early 1990s." },
   
   { year: "PHILIPPINES SINCE 1990", content: "Fidel Ramos won the May 1992 presidential election with less than 24% of the vote after serving as defense minister under Aquino. His administration faced severe challenges including insurgencies, energy crises, economic decay, and poverty. Ramos successfully negotiated peace with military rebels and the MNLF, and pursued economic reforms that stabilized the economy ahead of the 1997 Asian financial crisis. His proactive foreign policy preserved relations amidst regional disputes. Conversely, Joseph Estrada's 1998 presidency reversed Ramos's gains, marked by economic setbacks, corruption allegations, and his impeachment in 2000 amid public protests. Gloria Arroyo, succeeding Estrada in 2001, faced similar issues and accusations, surviving several coup attempts before her presidency ended in 2010." },
 ];
 
 document.addEventListener('DOMContentLoaded', function() {
   const timeline = document.getElementById('timeline');
 
   timelineData.forEach(item => {
     const timelineItem = `
       <div class="timeline-item">
         <div class="timeline-year">${item.year}</div>
         <div class="timeline-content">
           <p>${item.content}</p>
         </div>
       </div>
     `;
     timeline.innerHTML += timelineItem;
   });
 }); 

 const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  breakpoints: {
      768: {
          slidesPerView: 2,
      },
      1024: {
          slidesPerView: 3,
      },
  }
});