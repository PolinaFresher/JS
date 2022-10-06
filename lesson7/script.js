//Использую полученные знания, реализуйте экземпляр любого объекта. Объект
//должен иметь, как внутренние, так и доступные для пользователя, свойства и методы.
//Примеры объектов: 
//Контакты. Возм. методы: добавление нового контакта (ввод ФИО, возраст, телефон, эл.
    // почта), проверка введенной информации, например: проверить возраст – должен быть целым неотрицательным числом больше 18, 
    // вывод информации о конкретном контакте, вывод всех контактов.

 
     // console.log(contacts.ContactsA_F.contact5)

    // for (let key in contacts.ContactsA_F)
    // console.log(key + ':'+ contacts.ContactsA_F[key])


 
    // for (a in contacts) {
    //     console.log(a)
    //     for (Contact in a) {
    //         console.log(Contact)
    //     }
       
    // }

    // for (let key in contacts) {
    //     console.log(key + ' - ' + contacts[key]);
    // }

    // for (let i = 0; i < contacts.length; i++) {
    //     contacts = contacts.length[i];

    //     console.log(contacts[i])
        
    // }


    //список контактов

 function Contact (firstName,sureName,phoneNumber,email)
     {
    this.firstName = firstName ;
    this.sureName = sureName;
    this.phoneNumber = phoneNumber
    this.email = email
    this.inGroup = false;
    this.inFamilyGroup = false;
    this.inColleaguesGroup = false;
     }

     let contact1 = new Contact('Alison,colleague','Johnson',80257435577,'alis77@gmail.com')   
     let contact2 = new Contact('Bob','Moore',80293556767,'bobby77@gmail.com',)
     let contact3 = new Contact('Susan','Johnson',80443590765,'johnson90@gmail.com',)
     let contact4 = new Contact('Kevin,colleague','Pitts',80339590806,'KPitts@outlook.com',)
     let contact5 = new Contact('Amanda','Fitz',80257550077,'pups@icloud.com',)
     let contact6 = new Contact('Roger','Stivenson',80335780987,'stivie@gmail.com',)
     let contact7 = new Contact('Granny Nonna','Johnson',80296590995,'nonna75@gmail.com',)

    let contacts = {
        ContactsA_F: {contact1,contact5,contact2},
        ContactsG_M: {contact4,contact7},
        ContactsN_R: {contact6},
        ContactsS_Z: {contact3},

    }

    
// проверка первого контакта и распределение по группам

 let x = String (contacts.ContactsA_F.contact1.firstName)

    if (contacts.ContactsA_F.contact1.sureName ==='Johnson') {
        contacts.ContactsA_F.contact1.inFamilyGroup = true

    } 

    if ( x.indexOf(',')+1){
        contacts.ContactsA_F.contact1.inColleaguesGroup = true
        
    }

    if(contacts.ContactsA_F.contact1.inFamilyGroup == true || contacts.ContactsA_F.contact1.inColleaguesGroup == true) {
        contacts.ContactsA_F.contact1.inGroup = true
    }
     console.log(contacts.ContactsA_F.contact1)

    // проверка второго контакта и распределение по группам

    let z = String (contacts.ContactsA_F.contact2.firstName)

    if (contacts.ContactsA_F.contact2.sureName ==='Johnson') {
        contacts.ContactsA_F.contact2.inFamilyGroup = true

    } 

    if ( z.indexOf(',')+1){
        contacts.ContactsA_F.contact2.inColleaguesGroup = true
        
    }

    if(contacts.ContactsA_F.contact2.inFamilyGroup == true || contacts.ContactsA_F.contact2.inColleaguesGroup == true) {
        contacts.ContactsA_F.contact2.inGroup = true
    }
    console.log(contacts.ContactsA_F.contact2)

    // проверка третьего контакта и распределение по группам

    let l = String (contacts.ContactsS_Z.contact3.firstName)

    if (contacts.ContactsS_Z.contact3.sureName ==='Johnson') {
        contacts.ContactsS_Z.contact3.inFamilyGroup = true

    } 

    if ( l.indexOf(',')+1){
        contacts.ContactsS_Z.contact3.inColleaguesGroup = true
        
    }

    if(contacts.ContactsS_Z.contact3.inFamilyGroup == true || contacts.ContactsA_F.contact2.inColleaguesGroup == true) {
        contacts.ContactsS_Z.contact3.inGroup = true
    }
    console.log(contacts.ContactsS_Z.contact3)


// проверка четвертого контакта и распределение по группам


let r = String (contacts.ContactsG_M.contact4.firstName)

    if (contacts.ContactsG_M.contact4.sureName ==='Johnson') {
        contacts.ContactsG_M.contact4.inFamilyGroup = true

    } 

    if ( r.indexOf(',')+1){
        contacts.ContactsG_M.contact4.inColleaguesGroup = true
        
    }

    if(contacts.ContactsG_M.contact4.inFamilyGroup == true || contacts.ContactsG_M.contact4.inColleaguesGroup == true) {
        contacts.ContactsG_M.contact4.inGroup = true
    }
    console.log(contacts.ContactsG_M.contact4)


    // проверка пятого контакта и распределение по группам

    let s = String (contacts.ContactsA_F.contact5.firstName)

    if (contacts.ContactsA_F.contact5.sureName ==='Johnson') {
        contacts.ContactsA_F.contact5.inFamilyGroup = true

    } 

    if ( s.indexOf(',')+1){
        contacts.ContactsA_F.contact5.inColleaguesGroup = true
        
    }

    if(contacts.ContactsA_F.contact5.inFamilyGroup == true || contacts.ContactsA_F.contact5.inColleaguesGroup == true) {
        contacts.ContactsA_F.contact5.inGroup = true
    }
     console.log(contacts.ContactsA_F.contact5)

     // проверка шестого контакта и распределение по группам    

    let m = String (contacts.ContactsN_R.contact6.firstName)

    if (contacts.ContactsN_R.contact6.sureName ==='Johnson') {
        contacts.ContactsN_R.contact6.inFamilyGroup = true

    } 

    if ( m.indexOf(',')+1){
        contacts.ContactsN_R.contact6.inColleaguesGroup = true
        
    }

    if(contacts.ContactsN_R.contact6.inFamilyGroup == true || contacts.ContactsN_R.contact6.inColleaguesGroup == true) {
        contacts.ContactsA_F.contact5.inGroup = true
    }
     console.log(contacts.ContactsN_R.contact6)

   // проверка седьмого контакта и распределение по группам  


   let p = String (contacts.ContactsG_M.contact7.firstName)

   if (contacts.ContactsG_M.contact7.sureName ==='Johnson') {
       contacts.ContactsG_M.contact7.inFamilyGroup = true

   } 

   if ( p.indexOf(',')+1){
       contacts.ContactsG_M.contact7.inColleaguesGroup = true
       
   }

   if(contacts.ContactsG_M.contact7.inFamilyGroup == true || contacts.ContactsG_M.contact7.inColleaguesGroup == true) {
       contacts.ContactsG_M.contact7.inGroup = true
   }
   console.log(contacts.ContactsG_M.contact7)




    
   


