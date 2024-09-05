
let militaryUnit = {

    name: "1st Infantry Division",
  
    location: "Fort Bragg, North Carolina, USA",
  
    establishmentDate: "1941-06-01",
  
    unitType: "Infantry Division",
  //מבנה הפקודה
    commandStructure: {
  //מפקד
      commandingOfficer: {
  
        rank: "Major General",
  
        name: "John Doe",
  
        contact: {
  
          email: "john.doe@example.com",
  
          phone: "+1-555-123-4567",
  
        },
  
      },
  //מנכ"ל
      executiveOfficer: {
  
        rank: "Colonel",
  
        name: "Jane Smith",
  
        contact: {
  
          email: "jane.smith@example.com",
  
          phone: "+1-555-987-6543",
  
        },
  
      },
  //הרמטכ"ל
      chiefOfStaff: {
  
        rank: "Brigadier General",
  
        name: "Robert Brown",
  
        contact: {
  
          email: "robert.brown@example.com",
  
          phone: "+1-555-555-1234",
  
        },
  
      },
  
    },
  //אנשי
    personnel: [
  
      {
  
        id: 1,
  
        name: "Private First Class Alice Johnson",
  
        rank: "Private First Class",
  
        role: "Rifleman",
  
        contact: {
  
          email: "alice.johnson@example.com",
  
          phone: "+1-555-000-1111",
  
        },
  
      },
  
      {
  
        id: 2,
  
        name: "Sergeant Michael White",
  
        rank: "Sergeant",
  
        role: "Squad Leader",
  
        contact: {
  
          email: "michael.white@example.com",
  
          phone: "+1-555-000-2222",
  
        },
  
      },
  
    ],
  //ציוד
    equipment: {
  //כלי רכב
      vehicles: [
  
        {
  
          type: "M1 Abrams Tank",
  
          quantity: 20,
  
          status: "Operational",
  
        },
  
        {
  
          type: "Humvee",
  
          quantity: 50,
  
          status: "Operational",
  
        },
  
      ],
  //נשק
      firearms: [
  
        {
  
          type: "M16 Rifle",
  
          quantity: 500,
  
          status: "Operational",
  
        },
  
        {
  
          type: "M249 SAW",
  
          quantity: 100,
  
          status: "Operational",
  
        },
  
      ],
  //ציוד אחר
      otherEquipment: [
  
        {
  
          type: "Night Vision Goggles",
  
          quantity: 150,
  
          status: "Operational",
  
        },
  
        {
  
          type: "Field Radios",
  
          quantity: 100,
  
          status: "Operational",
  
        },
  
      ],
  
    },
  //משימות
    missions: [
  
      {
  
        missionName: "Operation Desert Storm",
  
        startDate: "1991-01-17",
  
        endDate: "1991-02-28",
  
        description: "Combat operation to liberate Kuwait from Iraqi occupation.",
  
      },
  
      {
  
        missionName: "Operation Enduring Freedom",
  
        startDate: "2001-10-07",
  
        endDate: "2014-12-28",
  
        description:
  
          "Military operations aimed at dismantling al-Qaeda and removing the Taliban from power in Afghanistan.",
  
      },
  
    ],
  // תוכניות הכשרה
    trainingPrograms: [
  
      {
  
        programName: "Basic Combat Training",
  
        duration: 10,
  
        focus:
  
          "Fundamentals of soldiering, physical conditioning, and basic combat skills.",
  
      },
  
      {
  
        programName: "Advanced Individual Training",
  
        duration: 12,
  
        focus:
  
          "Specialized training for specific military occupational specialties.",
  
      },
  
    ],
  //היסטוריה
    history: [
  
      {
  
        eventDate: "1941-06-01",
  
        eventDescription: "Establishment of the 1st Infantry Division.",
  
      },
  
      {
  
        eventDate: "1944-06-06",
  
        eventDescription: "Participated in the D-Day landings in Normandy.",
  
      },
  
    ],
  // פריסה נוכחית
    currentDeployment: {
  
      location: "Middle East",
  
      mission: "Counter-terrorism operations",
  
      startDate: "2024-01-01",
  
      estimatedEndDate: "2024-12-31",
  
    },
  
  };
  //1
  const Mission1 = (military) => {
    const chiefOfStaff = military.commandStructure.chiefOfStaff;
    return `${chiefOfStaff.rank}, ${chiefOfStaff.name}, ${chiefOfStaff.contact.phone}`
  }
  //2
  const Mission2 = (military) => military.personnel.length;
  //3 
  const Mission3 = (newCurrentDeployment) =>{
    const currentDeployment =  militaryUnit.currentDeployment;
         militaryUnit.history.push({eventDate: currentDeployment.startDate ,
            eventDescription : currentDeployment.mission});
         currentDeployment.location = newCurrentDeployment.location;
         currentDeployment.mission = newCurrentDeployment.mission;
         currentDeployment.startDate = newCurrentDeployment.startDate;
         currentDeployment.estimatedEndDate = newCurrentDeployment.estimatedEndDate;
         return  militaryUnit 
  }

  //4 
  const Mission4 = (newFirearms ,military) => {
    const firearms = military.equipment.firearms;
    firearms.forEach((odj) => {
        
        if (odj.status === newFirearms.status && odj.type === newFirearms.type)
        {
            odj.quantity += newFirearms.quantity;
            return militaryUnit
        } 
    })
    firearms.push({type: newFirearms.type,
        quantity: newFirearms.quantity,
        status: newFirearms.status,})
    return militaryUnit
  }
  

  
  console.log(Mission4())


  //5 
  const Mission5 = (military) => {
 const trainingPrograms = military.trainingPrograms;
 let sumDuration = 0;
 trainingPrograms.forEach(obj => {
sumDuration += obj.duration;
 })
return sumDuration
  }
  

 modeule.exports={
    Mission1,
    Mission2,
    Mission3,
    Mission4,
    Mission5,
 }   
  
 
  