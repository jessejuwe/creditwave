import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AiOutlineDown } from 'react-icons/ai';
import { FaBars } from 'react-icons/fa';
import { VscBellDot } from 'react-icons/vsc';
import { Avatar, Button, Image } from '@chakra-ui/react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

import { images } from '../../constants';
import { Card } from '../../exports/exports';
import { APPLICATIONS } from '../../helpers/applications';
import './Dashboard.scss';

const Dashboard: React.FC = () => {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState(null);

  const onChange = (dates: any) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <motion.div
      className="app__dashboard"
      key="app__dashboard"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 1,
        ease: 'easeInOut',
        delayChildren: 0.5,
      }}
    >
      <div className="app__dashboard-header">
        <div className="menu">
          <FaBars />
        </div>

        <div className="info">
          <VscBellDot />

          <div className="name-mail">
            <h3>Adekunle Adebona</h3>
            <p>adekunke.adebona@creditwaveng.com</p>
          </div>

          <Avatar name="Adekunle Adebona" size="sm" />
          <AiOutlineDown />
        </div>
      </div>

      <div className="app__dashboard-content">
        <div className="welcome-container">
          <div className="message">
            <div className="inner-message">
              <h1>Wecome back, Kenny!</h1>
              <p>Your last login was 12:00pm 9th July, 2023</p>
            </div>

            <div className="image">
              <Image src={images.dashboard} />
            </div>
          </div>

          <Card className="avatar">
            <Avatar name="Adekunle Adebona" size="lg" />
            <h3>Adekunle Adebona</h3>
            <p>UI/UX Designer</p>
          </Card>
        </div>

        <div className="application-container">
          <Card className="application">
            <div className="info-nav">
              <h3>Applications</h3>
              <p>See More</p>
            </div>

            <div className="apps">
              {APPLICATIONS.map((app, index) => (
                <div key={index} className="app">
                  <app.icon />
                  <h3>{app.title}</h3>
                  <div className="base">
                    <p className="date">{app.date}</p>
                    <p className="badge">{app.badge}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <div className="helper">
            <Card className="date-picker">
              <DatePicker
                selected={startDate}
                onChange={onChange}
                startDate={startDate}
                endDate={endDate}
                selectsRange
                inline
              />
            </Card>

            <Card className="help">
              <Image src={images.help} />
              <h3>Need Help?</h3>
              <p>Do you have any problem while using the creditwave SSO?</p>
              <Button variant="solid" type="submit" width="full" size="sm">
                Contact Us Now
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Dashboard;
