import React from 'react'
import $ from 'jquery'
import './App.css'

const chatMessages = [
  {
    name: 'ms1',
    msg: 'Who are you?',
    delay: 1000,
    align: 'right',
    showTime: true,
    time: '19:58'
  },
  {
    name: 'ms2',
    msg: 'We are young team of entrepreneurs, developers, designers and visionaries. We are based in Berlin and started working on Freedactics in early 2015.',
    delay: 1400,
    align: 'left',
    showTime: true,
    time: '19:58'
  },
  {
    name: 'ms3',
    msg: 'Could you describe Freedactics in one sentence?',
    delay: 2400,
    align: 'right',
    showTime: true,
    time: '19:58'
  },
  {
    name: 'ms4',
    msg: 'Everything from lecture to exam in your pocket: Freedactics is a cloud-based platform build for students needs.',
    delay: 1700,
    align: 'left',
    showTime: true,
    time: '19:58'
  },
  {
    name: 'ms5',
    msg: 'And the longer version?',
    delay: 2100,
    align: 'right',
    showTime: true,
    time: '19:58'
  },
  {
    name: 'ms6',
    msg: 'As students we use to organize all our daily life around web and mobile technology, except the actual studying part. For learning we still use huge amounts of paper, books and heavy backpacks.',
    delay: 1000,
    align: 'left',
    showTime: false,
    time: '19:58'
  },
  {
    name: 'ms7',
    msg: 'Why? Because there is no solution out there to help students or teachers to easily digitalize their learning processes and contents. We think that learning should be fast, simple and effective. A platform for studying should give people the option to learn at their own scope, with their own contents integrated.',
    delay: 1800,
    align: 'left',
    showTime: false,
    time: '19:58'
  },
  {
    name: 'ms8',
    msg: 'This is why we developed Freedactics – a cloud-based solution tailored to students needs.',
    delay: 800,
    align: 'left',
    showTime: true,
    time: '19:58'
  },
  {
    name: 'ms9',
    msg: 'What makes you different from other learning platforms?',
    delay: 1500,
    align: 'right',
    showTime: true,
    time: '19:58'
  },
  {
    name: 'ms10',
    msg: 'We understand the needs of individual student. We don’t focus so much on content publishing or learning management but on learning. At the same time we acknowledge the need to integrate different perspectives, such as flash cards, content and task management.',
    delay: 1000,
    align: 'left',
    showTime: false,
    time: '19:58'
  },
  {
    name: 'ms11',
    msg: 'So we end up with a unique mix of focus on User Experience and thrive towards integration.',
    delay: 900,
    align: 'left',
    showTime: true,
    time: '19:58'
  },
  {
    name: 'ms12',
    msg: 'What is your vision for the future?',
    delay: 1400,
    align: 'right',
    showTime: true,
    time: '19:58'
  },
  {
    name: 'ms14',
    msg: 'We are releasing an App right now. But that’s only breaking ground. In fact, we have something much bigger in mind: a universe of education! Our vision is to connect people, connect tools and power learning through intelligent systems.',
    delay: 2100,
    align: 'left',
    showTime: true,
    time: '19:58'
  },
  {
    name: 'ms15',
    msg: 'Thanks! Something you want to add?',
    delay: 1500,
    align: 'left',
    showTime: true,
    time: '19:58'
  },
  {
    name: 'ms16',
    msg: 'You are welcome! Yes, check out freedactics.com!',
    delay: 900,
    align: 'left',
    showTime: true,
    time: '19:58'
  }
]

const Messages = (props) => (
    <li className={`message-${props.align} ${props.name}`} hidden>
  {/*    <div className={`sp-${props.name}`}>
        <span className={`spinme-${props.align}`}>
          <div className='spinner'>
            <div className='bounce1' />
            <div className='bounce2' />
            <div className='bounce3' />
          </div>
        </span>
      </div>*/}
      <div className={`messageinner-${props.name}`} hidden>
        {
          props.align === 'left'
          ? <span className='message-text' style={{color: 'red', textAlign: 'left'}}>{props.msg}</span>
            : <span className='message-text' style={{color: 'blue', textAlign: 'right'}}>{props.msg}</span>
        }
        {
          props.showTime && <span className='message-time'>{props.time}</span>
        }
      </div>
    </li>
)

const Original = () => {
  let chatDelay = 0

  const onRowAdded = () => {
    const selector = $('.chat-container')
    selector.animate({
      scrollTop: selector.prop('scrollHeight')
    })
  }

  React.useEffect(() => {
    chatMessages.forEach((obj, index) => {
      chatDelay = chatDelay + 4000;
      let chatDelay2 = chatDelay + obj.delay;
      let chatDelay3 = chatDelay2 + 10;
      let scrollDelay = chatDelay;
      let chatTimeString = " ";
      let msgname = "." + obj.name;
      let msginner = ".messageinner-" + obj.name;
      let spinner = ".sp-" + obj.name;
      if (obj.showTime) {
        chatTimeString = "<span class='message-time'>" + obj.time + "</span>";
      }
      $(".chat-message-list").append("<li class='message-" + obj.align + " " + obj.name + "' hidden><div class='sp-" + obj.name + "'><span class='spinme-" + obj.align + "'><div class='spinner'><div class='bounce1'></div><div class='bounce2'></div><div class='bounce3'></div></div></span></div><div class='messageinner-" + obj.name + "' hidden><span class='message-text'>" + obj.msg + "</span>" + chatTimeString + "</div></li>");
      $(msgname).delay(chatDelay).fadeIn();
      $(spinner).delay(chatDelay2).hide(1);
      $(msginner).delay(chatDelay3).fadeIn();
      setTimeout(onRowAdded, chatDelay);
      setTimeout(onRowAdded, chatDelay3);
      chatDelay = chatDelay3;
    })
  }, [])


  return (
    <div id="wrapper">
      <div className="chat">
        <div className="chat-container">
          <div className="chat-listcontainer">
            <ul className="chat-message-list">
              {
                // chatMessages.map(obj => <Messages {...obj} />)
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Original
