import {useState, useRef} from 'react';
import emailjs from '@emailjs/browser';

const SERVICE_ID = "service_zltj0mb";
const TEMPLATE_ID = "template_2mojyyl";
const PUBLIC_KEY ="YvHhyE-FGApKGs7Sm"; 



export default function Form(){
  const [page, setPage] = useState(1);
  const form = useRef(null);

  const nextHandler = ()=> setPage((p)=>p+1);
  const submitHandler = (evt)=>{
    console.log(evt);
    evt.preventDefault();
    let textStr ='';
    const textarea = form.current.message;
    form.current.time.value = new Date().toLocaleTimeString();
    const inputElems = form.current.querySelectorAll("input");
    for(let inputElem of inputElems)
      if(inputElem.type != "hidden")
	textStr += `${inputElem.name}: ${inputElem.value}\n`;

    textarea.value = textStr;
    setPage(p=>p-1);

    /*emailjs.sendForm(SERVICE_ID,TEMPLATE_ID,form.current,{publicKey: PUBLIC_KEY})
    .then(()=>{
      console.log("SUCCESS!");
      alert("FORM SUBMITTED SUCCESSFULLY!!!");
      form.current.reset();

    }, error=>{
      console.log("FAIL...",error);
      alert("FORM NOT SUBMITTED!!");
    });
    */
  }

  return (
    <section id="form-con">
      <h1>ONBOARDING FORM</h1>
      <div className="progress"><div><span>{page}</span>/<span>2</span></div></div>
      <form id="form" name="onboardingform" ref={form}>
	<input type="hidden" name="time"/>
	<div className="page-one" hidden={page!=1}>
	  <fieldset>
	    <legend>Personal Info</legend>

	    <div className="con full-name">
	      <label htmlFor="fullName" >Full name</label>
	      <input type="text" name="fullName" id="fullName" placeholder="John Doe" autoCapitalize="words" />
	    </div>
	    <div className="con bvn">
	      <label htmlFor="bvn">BVN</label>
	      <input type="number" name="BVN" id="bvn" inputMode="numeric" required/>
	    </div>
	    <div className="con nin">
	      <label htmlFor="nin">NIN</label>
	      <input type="number" name="NIN" id="nin" inputMode="numeric" required/>
	    </div>
	    <div className="con dob">
	      <label htmlFor="dob">Date of birth</label>
	      <input type="date" name="DOB" id="dob" required />
	    </div>
	    <div className="con email">
	      <label htmlFor="email" >Email</label>
	      <input type="email" name="Email" id="email" inputMode="email" required/>
	    </div>
	    <div className="con telphone">
	      <label htmlFor="telphone">Phone no</label>
	      <input type="tel" name="Phone_number" id="telphone" inputMode="tel" required/>
	    </div>
	  </fieldset>
	  <fieldset>
	    <legend>Residential info</legend>
	    <div className="con houseno">
	      <label htmlFor="houseNo">House No.</label>
	      <input type="number" name="House_no" id="houseNo" inputMode="numeric"/>
	    </div>
	    <div className="con street">
	      <label htmlFor="street">Street</label>
	      <input type="text" name="Street" id="street" required />
	    </div>
	    <div className="con city">
	      <label htmlFor="city">City</label>
	      <input type="text" name="City" id="city"/>
	    </div>
	    <div className="con state">
	      <label htmlFor="state">State</label>
	      <input type="text" name="State" id="state" required/>
	    </div>
	    <div className="con lga">
	      <label htmlFor="lga">LGA</label>
	      <input type="text" name="L.G.A" id="lga" required/>
	    </div>
	  </fieldset>
	</div>
	<div className="page-two" hidden={page!=2}>
	  <fieldset>
	    <legend>Business Info</legend>
	    <div className="con business-type">
	      <label htmlFor="businessType">Business Type</label>
	      <input type="text" name="Business_type" id="businessType"/>
	    </div>
	    <div className="con business-addr">
	      <label htmlFor="buzAddr">Business Address(full)</label>
	      <input type="text" name="biz_address" id="buzAddr" required/>
	    </div>
	    <div className="con egar">
	      <label htmlFor="egar">Expected Gross Annual Revenue</label>
	      <input type="text" name="Gross_annual_income" id="egar" inputMode="numeric"/>
	    </div>
	  </fieldset>
	  <fieldset>
	    <legend>Next of Kin Info</legend>
	    <div className="con first-name">
	      <label htmlFor="kinFirstName">First Name</label>
	      <input type="text" name="Kin_first_name" id="kinFirstName"/>
	    </div>
	    <div className="con last-name">
	      <label htmlFor="kinLastName">Last Name</label>
	      <input type="text" name="Kin_last_name" id="kinLastName"/>
	    </div>
	    <div className="con kin-dob">
	      <label htmlFor="kinDob">Date of birth</label>
	      <input type="date" name="Kin_DOB" id="kinDob"/>
	    </div>
	    <div className="con relationship">
	      <label htmlFor="relationship">Relationship</label>
	      <input type="text" name="Relationship" id="relationship" required/>
	    </div>
	    <div className="con kin-telphone">
	      <label htmlFor="kinTelphone">Phone No. </label>
	      <input type="tel" name="Kin_phone_number" id="kinTelphone" inputMode="tel"/>
	    </div>
	    <div className="con home-addr">
	      <label htmlFor="kinHomeAddr">Home Address(full)</label>
	      <input type="text" name="Kin_home_address" id="kinHomeAddr"/>
	    </div>	
	    <div className="con kin-nationality">
	      <label htmlFor="kinNationality">Nationality</label>
	      <input type="text" name="Kin_nationality" id="kinNationality"/>
	    </div>
	    <div className="con kin-state">
	      <label htmlFor="kinState">State of Origin</label>
	      <input type="text" name="Kin_state" id="kinState"/>
	    </div>
	    <div className="con kin-lga">
	      <label htmlFor="kinLga">LGA of origin</label>
	      <input type="text" name="Kin_L.G.A" id="kinLga"/>
	    </div>
	  </fieldset>
	</div>
	<textarea name="message" hidden/>
      </form>
      <div className="btn-con">
	  <button className="btn prev" hidden={page==1?true:false} onClick={()=>setPage(page-1)}>Prev</button>
	  <button className={page == 1?"btn next":"btn submit"} onClick={page ==1?nextHandler:submitHandler}>{page==1?"Next":"Submit"}</button>
      </div>
    </section>
  )
}
