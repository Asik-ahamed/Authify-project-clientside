import logo from './logo.png';
import header from './header.png';
import logo_home from './logo_home.png';
import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo1 from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'

export const assets = {
    logo,
    header,
    logo_home,
    appointment_img,
    header_img,
    group_profiles,
    logo1,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'General physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. Richard James',
        image: doc1,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr.Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies',
        fees: 50,
        address: {
            line1: '17th cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc2',
        name: 'Dr. Emily larson',
        image: doc2,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr.Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies',
        fees: 60,
        address: {
            line1: '17th cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. Rohit Sharama',
        image: doc3,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '5 years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr.Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies',
        fees: 100,
        address: {
            line1: '17th cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc4',
        name: 'Dr. Roshlin Joe',
        image: doc4,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '2 years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr.Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies',
        fees: 70,
        address: {
            line1: '17th cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. Edwin Micheal',
        image: doc5,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '6 years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr.Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies',
        fees: 150,
        address: {
            line1: '17th cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc6',
        name: 'Dr. Emily larson',
        image: doc6,
        speciality: 'Gastroenterologist',
        degree: 'MBBS',
        experience: '7 years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr.Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies',
        fees: 200,
        address: {
            line1: '17th cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
     {
        _id: 'doc7',
        name: 'Dr. Ishant Sharma',
        image: doc7,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '2 years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr.Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies',
        fees: 50,
        address: {
            line1: '17th cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
     {
        _id: 'doc8',
        name: 'Dr. Paul Krishna',
        image: doc8,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr.Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies',
        fees: 70,
        address: {
            line1: '17th cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
     {
        _id: 'doc9',
        name: 'Dr. Tony Shark',
        image: doc9,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '4 years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr.Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies',
        fees: 100,
        address: {
            line1: '17th cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
     {
        _id: 'doc10',
        name: 'Dr. Travis Head',
        image: doc10,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '5 years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr.Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies',
        fees: 150,
        address: {
            line1: '17th cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
     {
        _id: 'doc11',
        name: 'Dr. Steve Smith',
        image: doc11,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '6 years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr.Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies',
        fees: 60,
        address: {
            line1: '17th cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
     {
        _id: 'doc12',
        name: 'Dr. Jansi Rani',
        image: doc12,
        speciality: 'Gastroenterologist',
        degree: 'MBBS',
        experience: '7 years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr.Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies',
        fees: 100,
        address: {
            line1: '17th cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
     {
        _id: 'doc13',
        name: 'Dr. Richard Emisan',
        image: doc13,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '8 years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr.Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies',
        fees: 200,
        address: {
            line1: '17th cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
     {
        _id: 'doc14',
        name: 'Dr. Roman Regiens',
        image: doc14,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '4 years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr.Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies',
        fees: 80,
        address: {
            line1: '17th cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
     {
        _id: 'doc15',
        name: 'Dr. Praveen Kumar',
        image: doc15,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '6 years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr.Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies',
        fees: 200,
        address: {
            line1: '17th cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    
]

























