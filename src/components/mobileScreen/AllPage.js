import React, {Component} from 'react'
import NewspaperIcon from 'mdi-react/NewspaperIcon'
import CalendarTextIcon from 'mdi-react/CalendarTextIcon'
import LogoutVariantIcon from 'mdi-react/LogoutVariantIcon'
import CommentTextIcon from'mdi-react/CommentTextIcon'

const NewsPage = () => (
    <div style={{width: '100%', maxHeight: 559, overflow: 'auto', paddingTop: 10}}>
        <center>
            <div style={{width: 355, height: 300, border: '1px solid #ddd', marginBottom: 10}}>
                <img alt={'demo'} src={require('../../styles/images/livedemo.png')} style={{width: '100%', height: 230}}/>
                <div style={{width: '100%', height: 70, display: 'flex', alignItems: 'center', marginLeft: 20}}>
                    <div style={{fontSize: 16}}>asdsa</div>
                </div>
            </div>
            <div style={{width: 355, height: 90, border: '1px solid #ddd', marginBottom: 10, display: 'flex', flexDirection: 'row'}}>
                <img alt={'demo'} src={require('../../styles/images/livedemo.png')} style={{width: 130, height: '100%'}}/>
                <div style={{width: 130, height: '100%', flex: 1, display: 'flex', alignItems: 'center', marginLeft: 15}}>
                    Justify
                </div>
            </div>
            <div style={{width: 355, height: 90, border: '1px solid #ddd', marginBottom: 10, display: 'flex', flexDirection: 'row'}}>
            <img alt={'demo'} src={require('../../styles/images/livedemo.png')} style={{width: 130, height: '100%'}}/>
                <div style={{width: 130, height: '100%', flex: 1, display: 'flex', alignItems: 'center', marginLeft: 15}}>
                    Justify
                </div>
            </div>
            <div style={{width: 355, height: 90, border: '1px solid #ddd', marginBottom: 10, display: 'flex', flexDirection: 'row'}}>
            <img alt={'demo'} src={require('../../styles/images/livedemo.png')} style={{width: 130, height: '100%'}}/>
                <div style={{width: 130, height: '100%', flex: 1, display: 'flex', alignItems: 'center', marginLeft: 15}}>
                    Justify
                </div>
            </div>
        </center>
    </div>
)

const EventPage = () => (
    <div style={{width: '100%', maxHeight: 559, overflow: 'auto', paddingTop: 10}}>
        <center>
            <div style={{height: 230}}>
                <img alt={'demo'} src={require('../../styles/images/livedemo.png')} style={{width: '100%', height: 230}}/>
            </div>
            <div style={{height: 230}}>
                <img alt={'demo'} src={require('../../styles/images/livedemo.png')} style={{width: '100%', height: 230}}/>
            </div>
            <div style={{height: 230}}>
                <img alt={'demo'} src={require('../../styles/images/livedemo.png')} style={{width: '100%', height: 230}}/>
            </div>
            <div style={{height: 230}}>
                <img alt={'demo'} src={require('../../styles/images/livedemo.png')} style={{width: '100%', height: 230}}/>
            </div>
        </center>
    </div>
)

const CareerPage = () => (
    <div style={{width: '100%', maxHeight: 559, overflow: 'auto', paddingTop: 10}}>
        <center>
            <div style={{width: 355, height: 90, border: '1px solid #ddd', marginBottom: 10, display: 'flex', flexDirection: 'row'}}>
                <img alt={'demo'} src={require('../../styles/images/livedemo.png')} style={{width: 130, height: '100%'}}/>
                <div style={{width: 130, height: '100%', flex: 1, display: 'flex', alignItems: 'center', marginLeft: 15}}>
                    Justify
                </div>
            </div>
            <div style={{width: 355, height: 90, border: '1px solid #ddd', marginBottom: 10, display: 'flex', flexDirection: 'row'}}>
                <img alt={'demo'} src={require('../../styles/images/livedemo.png')} style={{width: 130, height: '100%'}}/>
                <div style={{width: 130, height: '100%', flex: 1, display: 'flex', alignItems: 'center', marginLeft: 15}}>
                    Justify
                </div>
            </div>
            <div style={{width: 355, height: 90, border: '1px solid #ddd', marginBottom: 10, display: 'flex', flexDirection: 'row'}}>
            <img alt={'demo'} src={require('../../styles/images/livedemo.png')} style={{width: 130, height: '100%'}}/>
                <div style={{width: 130, height: '100%', flex: 1, display: 'flex', alignItems: 'center', marginLeft: 15}}>
                    Justify
                </div>
            </div>
            <div style={{width: 355, height: 90, border: '1px solid #ddd', marginBottom: 10, display: 'flex', flexDirection: 'row'}}>
            <img alt={'demo'} src={require('../../styles/images/livedemo.png')} style={{width: 130, height: '100%'}}/>
                <div style={{width: 130, height: '100%', flex: 1, display: 'flex', alignItems: 'center', marginLeft: 15}}>
                    Justify
                </div>
            </div>
            <div style={{width: 355, height: 90, border: '1px solid #ddd', marginBottom: 10, display: 'flex', flexDirection: 'row'}}>
            <img alt={'demo'} src={require('../../styles/images/livedemo.png')} style={{width: 130, height: '100%'}}/>
                <div style={{width: 130, height: '100%', flex: 1, display: 'flex', alignItems: 'center', marginLeft: 15}}>
                    Justify
                </div>
            </div>
        </center>
    </div>
)

const MenuPage = () => (
    <div style={{width: '100%', maxHeight: 559, overflow: 'auto'}}>
        <center>
            <div style={{height: 100, borderBottom: '1px solid #ddd', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <div style={{height: 70, width: 70, margin: 15}}>
                    <img alt={'demo'} src={require('../../styles/images/livedemo.png')} style={{width: 70, height: 70, borderRadius: 35}}/>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%'}}>
                    <div>Demo Content</div>
                    <div>demo@demo.com</div>
                </div>
            </div>
            <div>
                <div style={{margin: 9}}>Follow</div>
            </div>
            <div style={{borderTop: '1px solid #ddd', display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 20, marginBottom: 9, paddingTop: 10}}>
                <div style={{marginLeft: 30, display: 'flex', alignItems: 'center'}}>
                    <NewspaperIcon style={{marginRight: 5}}/> News Favorite
                </div>
            </div>
            <div style={{borderBottom: '1px solid #ddd', display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 20, marginBottom: 9, paddingBottom: 10}}>
                <div style={{marginLeft: 30, display: 'flex', alignItems: 'center'}}>
                    <CalendarTextIcon style={{marginRight: 5}}/>Event Joined
                </div>
            </div>
            <div>
                <div style={{margin: 9}}>Chat</div>
            </div>
            <div style={{borderTop: '1px solid #ddd', borderBottom: '1px solid #ddd', display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 20, paddingBottom: 10, paddingTop: 10}}>
                <div style={{marginLeft: 30, display: 'flex', alignItems: 'center'}}>
                    <CommentTextIcon style={{marginRight: 5}}/>Chat with Admin
                </div>
            </div>
            <div style={{borderTop: '1px solid #ddd', borderBottom: '1px solid #ddd', display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 20, paddingBottom: 10, paddingTop: 10}}>
                <div style={{marginLeft: 30, display: 'flex', alignItems: 'center'}}>
                    <LogoutVariantIcon style={{marginRight: 5}}/>Logout
                </div>
            </div>
        </center>
    </div>
)

export {
    NewsPage,
    EventPage,
    CareerPage,
    MenuPage
}
