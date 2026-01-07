import "./ContactUs.css";
import { useRef, useState } from "react";
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import axios from "axios"
import useSubjectsForm from "../../hooks/useSubjectsForm";
import useCityForm from "../../hooks/useCityForm";


const sendContact = async (data) => {
    const res = await axios.post('http://127.0.0.1:8000/adack/create/', data);
    return res.data;
};

function ContactUs() {
    const subjects = useSubjectsForm();
    const cities = useCityForm();


    const queryClient = useQueryClient()
    const mutation = useMutation({
        mutationFn: sendContact,
    })
    const submitHandler = (e) => {
        e.preventDefault();
        mutation.mutate({
            id: 1,
            title: 'Do Laundry',
        })
    }



    const InputTitle = useRef(null)
    const InputSubject = useRef(null)
    const InputEmail = useRef(null)
    const InputMobilenumber = useRef(null)
    const InputCity = useRef(null)
    const InputAddress = useRef(null)
    const InputMessagetext = useRef(null)


    const saveContactus = (event) => {
        event.preventDefault();
        axios.post("http://127.0.0.1:8000/adack/create/", {
            "title": InputTitle.current.value,
            "subject": InputSubject.current.value,
            "email": InputEmail.current.value,
            "mobile_number": InputMobilenumber.current.value,
            "city": InputCity.current.value,
            "address": InputAddress.current.value,
            "message_text": InputMessagetext.current.value,
        }, {
            headers: {
                "Content-Type": 'multipart/form-data'
            }
        })
            .then((res) => {
                console.log(res)
            })
    }




    return (
        <section id="ContactUs-id">

            <div className="container mt-3">
                <div className="row">

                    <div className="text-center mt-5">
                        <h2 className="fw-bolder">تماس با ما</h2>
                        <hr id="id_hr_line" />
                    </div>

                    <div className="py-5 mt-5" id="form_div">
                        <form className="row g-3" id="form" onSubmit={submitHandler}>
                            <div className="col-md-6">
                                <label for="inputState" className="form-label">موضوع</label>
                                <select id="inputState" className="form-control" ref={InputSubject} type="text">
                                    <option value="">موضوع</option>
                                    {subjects.data && subjects.data.map((list) => (
                                        <option value="1">{list.title}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="col-md-6">
                                <label for="inputName" className="form-label">نام و نام خانوادگی</label>
                                <input placeholder="نام و نام خانوادگی" type="text" className="form-control" id="inputName" ref={InputTitle} />
                            </div>
                            <div className="col-md-6">
                                <label for="inputEmail4" className="form-label">ایمیل</label>
                                <input placeholder="ایمیل" type="email" className="form-control" id="inputEmail4" ref={InputEmail} />
                            </div>
                            <div className="col-md-6">
                                <label for="inputMobileNumber" className="form-label">شماره موبایل</label>
                                <input placeholder="شماره موبایل" type="tel" className="form-control text-end" id="inputMobileNumber" ref={InputMobilenumber} />
                            </div>
                            <div className="col-md-6">
                                <label for="inputState" className="form-label">شهر</label>
                                <select id="inputState" className="form-control" ref={InputCity} type="text">
                                    <option value="">شهر</option>
                                    {cities.data && cities.data.map((list) => (
                                        <option value="1">{list.title}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="col-md-6">
                                <label for="inputAddress" className="form-label">آدرس</label>
                                <input placeholder="آدرس خود را بنویسید" type="text" className="form-control" id="inputAddress" ref={InputAddress} />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">متن پیام</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="4" ref={InputMessagetext}></textarea>
                            </div>


                            {
                                mutation.isSuccess &&
                                <div>
                                    <div class="alert alert-success alert-dismissible fade show" role="alert">
                                        پیام شما با موفقیت ثبت شد
                                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                    </div>
                                    <div class="alert alert-info alert-dismissible fade show" role="alert">
                                        لطفا منتظر ادمین برای پاسخگویی باشید
                                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                    </div>
                                </div>

                            }
                            {
                                mutation.isError &&
                                <div class="alert alert-danger alert-dismissible fade show" role="alert">
                                    در ارسال دیتا به سرور با خطا مواجه شدیم :(
                                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                </div>
                            }



                            <div className="col-12">
                                <button onClick={saveContactus} type="submit" className="btn btn-success" disabled={mutation.isPending ? true : false} >ثبت و ارسال</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>


        </section>
    )
}






export default ContactUs;