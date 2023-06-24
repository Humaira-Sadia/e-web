import React from 'react';
import styled from 'styled-components';
import { TbTruckDelivery } from "react-icons/tb";
import { GiReceiveMoney } from "react-icons/gi";
import { MdSecurity } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";


const Services = () => {
    return (
        <Wrapper>
            <div className='container'>
                <div className='grid grid-three-column'>
                    <div className='services-1'>

                        <TbTruckDelivery className="icon" />
                        <h3>Super Fast and Free Delivery.</h3>

                    </div>

                    <div className='services-2'>
                        <div className='services-column-2'>
                            <div>
                                <MdSecurity className='icon' />
                                <h3>
                                    Non-Contact Shipping.
                                </h3>
                            </div>
                        </div>
                        <div className='services-column-2'>
                            <GiReceiveMoney className="icon" />
                            <h3>Money-Back Guaranteed.</h3>
                        </div>
                    </div>

                    <div className='services-3'>
                        <div>
                            <RiSecurePaymentLine className="icon" />
                            <h3>Super Secure Payment System</h3>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
};

const Wrapper = styled.section`
    padding:9rem 0;
    
    .container{
        margin-top: -5%;
    }
    .grid{
        gap: 4.8rem;
    }

    .services-1,
    .services-2,
    .services-3{
        width: 33rem;
        height: 23rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: ${({ theme }) => theme
        .colors.bg};
    text-align: center;
    border-radius: 2rem;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
    }

    div{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 1rem;
    }

    .services-2{
        gap: 4rem;
        background-color: transparent;
        box-shadow: none;
    }

    .services-column-2{
        background: ${({ theme }) => theme.colors.bg};
        display: flex;
        flex-direction: row;
        flex: 1;
        justify-content: center;
        align-items: center;
        border-radius: 2rem;
        box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
    }
    h3 {
    margin-top: 1.4rem;
    margin-right: 1.5rem;
    font-size: 1.8rem;
  }
  .icon {
    width: 7rem;
    height: 7rem;
    padding: 1.8rem;
    border-radius: 50%;
    background-color: #fff;
    color: #5138ee;
    margin-left: 2rem;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    html{
        font-size: 50%;
    }

    div{
        display: block;
    }

    .services-2{
        margin-top: 3rem;
        margin-bottom: 3rem;
    }
}
`;

export default Services;
