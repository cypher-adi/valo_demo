import "./Footer.css";
import main1 from "../../img/main1.jpg";
import phx from "../../img/phx.jpg";
import viper from "../../img/viper.jpg";
import "./Rules.css"


const year = new Date().getFullYear();


const Rules = ( ) => {
    return <>
    
<section id="Rules">




    <div class="container-fluid">

    <div class="row">
<div class="col-lg-6">
<h2 class="heading">Genral Guidelines</h2>
    <ul class="pa">
    <li>THE TOURNAMENT WILL BEGIN FROM 22nd AUG 2022</li>
     <li>THE REGISTRAION WILL CLOSE ON 17th AUGUST 2022 </li>
     <li>The entry fees for the touranment is Rs 50/- per person.</li>
     <li>The teams must have 5 players to be eligible for registration. 
     Along with that they are allowed to have one more substitution. </li>
     <li>Hence , A team registering with 5 players need to pay a sum of Rs 250/- , 
     whereas a team registering with 6 players( 5 + 1 ) need to pay Rs 300/-</li>
     <li>All the Group stage matches will be BO1</li>
     <li>The playoffs will be BO3</li>
     <li>The GRAND FINALS will be BO5</li>
    




    </ul>


</div>
<div class="col-lg-6 pic">
<img class="image" src={main1} alt="img" />
</div>
</div>

<div class="row">
<div class="col-lg-6">

<img class="image" src={phx} alt="img" />
</div>
<div class="col-lg-6 ">
<h1 class="heading">Format and Timings</h1>
<ul class="pa" >
  <li>All the matches will be held in the night slot</li>
  <li>There will be two slots, 
  SLOT 1 = '09:00pm to 10:00pm' ,
  SLOT 2 =  '10:00pm to 11:00pm' </li>
  <li>All the teams will be informed regarding their matches in the morning through a whatsapp group</li>
  <li>If any team wishes to change their slot, they need to inform the us by the afternoon.
   Failing to do so will result in walkover to other team.  </li>
   <li>All the registerd teams will be divided into groups.</li>
   <li>PEARL is in the map pool</li>
   <li>Top Two teams from each group will qualify for palyoffs.</li>
   <li>The playoffs will be an upper and lower bracket format.</li>
   <li>The groups will be shared 3-4 days after the registration is closed.</li>

</ul>

</div>
</div>

<div class="row">
<div class="col-lg-6">
<h1 class="heading">Others</h1>
 <ul class="pa">

<li>The matches will be moniterd by league officials.</li>
    <li>If any team fails to join the lobby at given time,
     a 15 minutes window will be given and further delay will result in walkover to the other team.</li>
     <li>The map will be selected through a coin toss at discord server before the game.</li>
     <li>The team which win the toss will call for map and the losing team will call for side.</li>
     <li>During playoffs map selections will be done through map ban process.</li>
     <li>There will be total of 4 timeouts allowed,2 per half. </li>
     <li>In case a players disconnects during match, the match will be paused fro 10 minutes.
     The palyers needs to return within this time frame.</li>
     <li>No in-game sub is allowed. During BO3 & BO5 , the sub will be allowed in between maps.</li>
     <li> All the teams will be required the starting lineup 15 mins prior the match.</li>

</ul>
</div>
<div class="col-lg-6">
<img class="image" src={viper} alt="img" />
</div>
</div>















    </div>

</section>



    <footer id="footer">
      <p class="footes">Copyright METHGAMING ⓒ {year} </p>
    </footer>
  
    
    </>
    
    
    
    
    }
    
    export default Rules;