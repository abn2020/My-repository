import React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'

import * as S from './styles'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`
  }
}

function VerticalTabs() {
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <>
      <S.FlexCenter
        style={{ marginTop: '100px', justifyContent: 'center' }}
        id="worked"
      >
        <S.Color>02.</S.Color>
        <S.Title>Where I’ve Worked</S.Title>
        <S.Horizontal />
      </S.FlexCenter>
      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          height: 224,
          padding: '0px 500px'
        }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: 'divider' }}
        >
          <Tab
            label="Loja do Mecânico"
            {...a11yProps(0)}
            style={{ color: 'white !important', textTransform: 'none' }}
          />
          <Tab
            label="MaxD Tecnologia"
            {...a11yProps(1)}
            style={{ color: 'white !important', textTransform: 'none' }}
          />
          <Tab
            label="Assis"
            {...a11yProps(2)}
            style={{ color: 'white !important', textTransform: 'none' }}
          />
        </Tabs>
        <TabPanel value={value} index={0}>
          <>
            <span style={{ fontSize: '20px' }}>
              Developer @{' '}
              <span style={{ color: '#FA4616' }}>Loja do Mecânico</span>
            </span>
            <br />
            <span style={{ fontSize: '15px' }}>July 2021 - Present</span>
            <span
              style={{
                display: 'flex',
                columnGap: '10px',
                margin: '10px 0'
              }}
            >
              <ArrowRightIcon color="info" /> Write modern, performant,
              maintainable code for a diverse array of client and internal
              projects
            </span>
            <span
              style={{
                display: 'flex',
                columnGap: '10px',
                marginBottom: '10px'
              }}
            >
              <ArrowRightIcon color="info" /> Work with a variety of different
              languages, platforms, frameworks, and content management systems
              such as JavaScript, TypeScript, PHP, React and Node
            </span>
            <span
              style={{
                display: 'flex',
                columnGap: '10px',
                marginBottom: '10px'
              }}
            >
              <ArrowRightIcon color="info" /> Communicate with
              multi-disciplinary teams of engineers, designers, producers, and
              clients on a daily basis
            </span>
            <span style={{ fontSize: '20px' }}>
              Assist Support @{' '}
              <span style={{ color: '#FA4616' }}>Loja do Mecânico</span>
            </span>
            <br />
            <span style={{ fontSize: '15px' }}>Fev 2019 - July 2021</span>
            <span
              style={{
                display: 'flex',
                columnGap: '10px',
                marginBottom: '10px',
                marginTop: '10px'
              }}
            >
              <ArrowRightIcon color="info" /> Support for users and internal
              systems
            </span>
            <span
              style={{
                display: 'flex',
                columnGap: '10px',
                marginBottom: '10px'
              }}
            >
              <ArrowRightIcon color="info" /> computer configuration and
              maintenance of operating systems and hardware
            </span>
            <span
              style={{
                display: 'flex',
                columnGap: '10px',
                marginBottom: '10px'
              }}
            >
              <ArrowRightIcon color="info" /> local network configuration, ip,
              cisco switch, router connections, network infrastructure
            </span>
            <span
              style={{
                display: 'flex',
                columnGap: '10px',
                marginBottom: '10px'
              }}
            >
              <ArrowRightIcon color="info" /> development of automatic processes
              in the part of calls
            </span>
          </>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <span style={{ fontSize: '20px' }}>
            Technical Suport @<span style={{ color: '#3211ec' }}> MaxD </span>
            <span style={{ color: '#FA4616' }}> Tecnologia </span>
          </span>
          <br />
          <span style={{ fontSize: '15px' }}>Jan 2015 - Fev 2019</span>
          <span
            style={{
              display: 'flex',
              columnGap: '10px',
              margin: '10px 0'
            }}
          >
            <ArrowRightIcon color="info" /> remote assistance for users with
            difficulties in the technical part of systems and support for
            operating systems (linux, windows)
          </span>
          <span
            style={{
              display: 'flex',
              columnGap: '10px',
              margin: '10px 0'
            }}
          >
            <ArrowRightIcon color="info" /> Computer maintenance
          </span>
          <span
            style={{
              display: 'flex',
              columnGap: '10px',
              margin: '10px 0'
            }}
          >
            <ArrowRightIcon color="info" /> Technical support to users
          </span>
          <span
            style={{
              display: 'flex',
              columnGap: '10px',
              margin: '10px 0'
            }}
          >
            <ArrowRightIcon color="info" /> Network structure configuration
          </span>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <span style={{ fontSize: '20px' }}>
            Caregiver @<span style={{ color: '#3211ec' }}> Assis </span>
          </span>
          <br />
          <span style={{ fontSize: '15px' }}>June 2015 - Nov 2018</span>
          <span
            style={{
              display: 'flex',
              columnGap: '10px',
              margin: '10px 0'
            }}
          >
            <ArrowRightIcon color="info" /> Caregiver for people with special
            needs
          </span>
          <span
            style={{
              display: 'flex',
              columnGap: '10px',
              margin: '10px 0'
            }}
          >
            <ArrowRightIcon color="info" /> take care of and accompany disabled
            people in their daily tasks at their school
          </span>
          <span
            style={{
              display: 'flex',
              columnGap: '10px',
              margin: '10px 0'
            }}
          >
            <ArrowRightIcon color="info" /> identify difficulties of the person
            cared for and bring improvements to their life and routine at school
          </span>
        </TabPanel>
      </Box>
    </>
  )
}

export default VerticalTabs
