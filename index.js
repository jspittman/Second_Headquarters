"""
This sample demonstrates a simple skill built with the Amazon Alexa Skills Kit.
The Intent Schema, Custom Slots, and Sample Utterances for this skill, as well
as testing instructions are located at http://amzn.to/1LzFrj6

For additional samples, visit the Alexa Skills Kit Getting Started guide at
http://amzn.to/1LGWsLG
"""

from __future__ import print_function


# --------------- Helpers that build all of the responses ----------------------

def build_speechlet_response(title, output, reprompt_text, should_end_session):
    return {
        'outputSpeech': {
            'type': 'PlainText',
            'text': output
        },
        'card': {
            'type': 'Standard',
            'title': title,
            'text': output
        },
        'reprompt': {
            'outputSpeech': {
                'type': 'PlainText',
                'text': reprompt_text
            }
        },
        'shouldEndSession': should_end_session
    }


def build_response(session_attributes, speechlet_response):
    return {
        'version': '1.0',
        'sessionAttributes': session_attributes,
        'response': speechlet_response
    }


# --------------- Functions that control the skill's behavior ------------------

def get_welcome_response():
    """ If we wanted to initialize the session to have some attributes we could
    add those here
    """

    session_attributes = {}
    card_title = ""
    speech_output = "Where should I build my second headquarters?  You can check the skill page Second Headquarters to see qualfied cities."
 
    # If the user either does not reply to the welcome message or says something
    # that is not understood, they will be prompted again with this text.
    reprompt_text = "You can say the name of the city you'd like to see the Second Headquarters built in."

    should_end_session = False
    return build_response(session_attributes, build_speechlet_response(
        card_title, speech_output, reprompt_text, should_end_session))


def handle_session_end_request():
    card_title = ""
    speech_output = "Thanks for your input.  You can check my skill page Second Headquarters for updated results."
    
    # Setting this to true ends the session and exits the skill.
    should_end_session = True
    return build_response({}, build_speechlet_response(
        card_title, speech_output, None, should_end_session))

'''
def create_favorite_color_attributes(favorite_color):
    return {"favoriteColor": favorite_color}
'''

def help_reponse():
    card_title = "Second Headquarters - Help"
    speech_output = "You can say the name of the city you'd like to see the second headquarters built.  For example, Chicago."
    
    # Setting this to true ends the session and exits the skill.
    should_end_session = False
    return build_response({}, build_speechlet_response(
        card_title, speech_output, None, should_end_session))
    
'''
def set_color_in_session(intent, session):


    card_title = intent['name']
    session_attributes = {}
    should_end_session = False

    if 'Color' in intent['slots']:
        favorite_color = intent['slots']['Color']['value']
        session_attributes = create_favorite_color_attributes(favorite_color)
        speech_output = "Sorry, I don't seem to know that one. You can leave a comment on the sub it skill page if you'd like to see a substitution added. Would you like another sub?"
        reprompt_text = "Would you like another sub?"
    else:
        speech_output = "Sorry, I don't seem to know that one. You can leave a comment on the sub it skill page if you'd like to see a substitution added. Would you like another sub?"
        reprompt_text = "Would you like another sub?"
    return build_response(session_attributes, build_speechlet_response(
        card_title, speech_output, reprompt_text, should_end_session))
'''

def get_color_from_session(intent, session):
    session_attributes = {}
    reprompt_text = None

    if session.get('attributes', {}) and "favoriteColor" in session.get('attributes', {}):
        favorite_color = session['attributes']['favoriteColor']
        speech_output = "Sorry, that city isn't in the list of qualified cities.  Where should I bulid my second headquarters?"
        should_end_session = False
    else:
        speech_output = "Sorry, that city isn't in the list of qualified cities.  Where should I bulid my second headquarters?"
        should_end_session = False

    # Setting reprompt_text to None signifies that we do not want to reprompt
    # the user. If the user does not respond or says something that is not
    # understood, the session will end.
    return build_response(session_attributes, build_speechlet_response(
        intent['name'], speech_output, reprompt_text, should_end_session))

'''
def butter_sub(intent, session):
    card_title = "butter response"
    session_attributes = {}
    reprompt_text = None
    speech_output = "A substitute for butter is applesauce"
    should_end_session = False
    
    return build_response(session_attributes, build_speechlet_response(
    card_title, speech_output, reprompt_text, should_end_session))
'''

def keep_going():

    session_attributes = {}
    card_title = ""
    speech_output = "What city should I build my second headquarters in?"
 
    # If the user either does not reply to the welcome message or says something
    # that is not understood, they will be prompted again with this text.
    reprompt_text = "You can say the name of the city you want my second headquarters to be built in."

    should_end_session = False
    return build_response(session_attributes, build_speechlet_response(
        card_title, speech_output, reprompt_text, should_end_session))

def atlanta_sub():

    session_attributes = {}
    card_title = "You've Voted For Atlanta"
    speech_output = "Thank you for your vote for Atlanta.  I've made a note of it. You can check the skill page Second Headquarters for updated results.  Thank you."
 
    # If the user either does not reply to the welcome message or says something
    # that is not understood, they will be prompted again with this text.
    reprompt_text = ""

    should_end_session = True
    return build_response(session_attributes, build_speechlet_response(
        card_title, speech_output, reprompt_text, should_end_session))

def austin_sub():

    session_attributes = {}
    card_title = "You've Voted For Austin"
    speech_output = "Thank you for your vote for Austin.  I've made a note of it. You can check the skill page Second Headquarters for updated results.  Thank you."
 
    # If the user either does not reply to the welcome message or says something
    # that is not understood, they will be prompted again with this text.
    reprompt_text = ""

    should_end_session = True
    return build_response(session_attributes, build_speechlet_response(
        card_title, speech_output, reprompt_text, should_end_session))
        
def baltimore_sub():

    session_attributes = {}
    card_title = "You've Voted For Baltimore"
    speech_output = "Thank you for your vote for Baltimore.  I've made a note of it. You can check the skill page Second Headquarters for updated results.  Thank you."
 
    # If the user either does not reply to the welcome message or says something
    # that is not understood, they will be prompted again with this text.
    reprompt_text = ""

    should_end_session = True
    return build_response(session_attributes, build_speechlet_response(
        card_title, speech_output, reprompt_text, should_end_session))
        
def birmingham_sub():

    session_attributes = {}
    card_title = "You've Voted For Birmingham"
    speech_output = "Thank you for your vote for Birmingham.  I've made a note of it. You can check the skill page Second Headquarters for updated results.  Thank you."
 
    # If the user either does not reply to the welcome message or says something
    # that is not understood, they will be prompted again with this text.
    reprompt_text = ""

    should_end_session = True
    return build_response(session_attributes, build_speechlet_response(
        card_title, speech_output, reprompt_text, should_end_session))
        
def boston_sub():

    session_attributes = {}
    card_title = "You've Voted For Boston"
    speech_output = "Thank you for your vote for Boston.  I've made a note of it. You can check the skill page Second Headquarters for updated results.  Thank you."
 
    # If the user either does not reply to the welcome message or says something
    # that is not understood, they will be prompted again with this text.
    reprompt_text = ""

    should_end_session = True
    return build_response(session_attributes, build_speechlet_response(
        card_title, speech_output, reprompt_text, should_end_session))
        
def buffalo_sub():

    session_attributes = {}
    card_title = "You've Voted For Buffalo"
    speech_output = "Thank you for your vote for Buffalo.  I've made a note of it. You can check the skill page Second Headquarters for updated results.  Thank you."
 
    # If the user either does not reply to the welcome message or says something
    # that is not understood, they will be prompted again with this text.
    reprompt_text = ""

    should_end_session = True
    return build_response(session_attributes, build_speechlet_response(
        card_title, speech_output, reprompt_text, should_end_session))
        
def charlotte_sub():

    session_attributes = {}
    card_title = "You've Voted For Charlotte"
    speech_output = "Thank you for your vote for Charlotte.  I've made a note of it. You can check the skill page Second Headquarters for updated results.  Thank you."
 
    # If the user either does not reply to the welcome message or says something
    # that is not understood, they will be prompted again with this text.
    reprompt_text = ""

    should_end_session = True
    return build_response(session_attributes, build_speechlet_response(
        card_title, speech_output, reprompt_text, should_end_session))
        
def chicago_sub():

    session_attributes = {}
    card_title = "You've Voted For Chicago"
    speech_output = "Thank you for your vote for Chicago.  I've made a note of it. You can check the skill page Second Headquarters for updated results.  Thank you."
 
    # If the user either does not reply to the welcome message or says something
    # that is not understood, they will be prompted again with this text.
    reprompt_text = ""

    should_end_session = True
    return build_response(session_attributes, build_speechlet_response(
        card_title, speech_output, reprompt_text, should_end_session))
        
def cincinnati_sub():

    session_attributes = {}
    card_title = "You've Voted For Cincinnati"
    speech_output = "Thank you for your vote for Cincinnati.  I've made a note of it. You can check the skill page Second Headquarters for updated results.  Thank you."
 
    # If the user either does not reply to the welcome message or says something
    # that is not understood, they will be prompted again with this text.
    reprompt_text = ""

    should_end_session = True
    return build_response(session_attributes, build_speechlet_response(
        card_title, speech_output, reprompt_text, should_end_session))
        
def cleveland_sub():

    session_attributes = {}
    card_title = "You've Voted For Cleveland"
    speech_output = "Thank you for your vote for Cleveland.  I've made a note of it. You can check the skill page Second Headquarters for updated results.  Thank you."
 
    # If the user either does not reply to the welcome message or says something
    # that is not understood, they will be prompted again with this text.
    reprompt_text = ""

    should_end_session = True
    return build_response(session_attributes, build_speechlet_response(
        card_title, speech_output, reprompt_text, should_end_session))
        
def dallas_sub():

    session_attributes = {}
    card_title = "You've Voted For Dallas"
    speech_output = "Thank you for your vote for Dallas.  I've made a note of it. You can check the skill page Second Headquarters for updated results.  Thank you."
 
    # If the user either does not reply to the welcome message or says something
    # that is not understood, they will be prompted again with this text.
    reprompt_text = ""

    should_end_session = True
    return build_response(session_attributes, build_speechlet_response(
        card_title, speech_output, reprompt_text, should_end_session))
        
def denver_sub():

    session_attributes = {}
    card_title = "You've Voted For Denver"
    speech_output = "Thank you for your vote for Denver.  I've made a note of it. You can check the skill page Second Headquarters for updated results.  Thank you."
 
    # If the user either does not reply to the welcome message or says something
    # that is not understood, they will be prompted again with this text.
    reprompt_text = ""

    should_end_session = True
    return build_response(session_attributes, build_speechlet_response(
        card_title, speech_output, reprompt_text, should_end_session))
        
def detroit_sub():

    session_attributes = {}
    card_title = "You've Voted For Detroit"
    speech_output = "Thank you for your vote for Detroit.  I've made a note of it. You can check the skill page Second Headquarters for updated results.  Thank you."
 
    # If the user either does not reply to the welcome message or says something
    # that is not understood, they will be prompted again with this text.
    reprompt_text = ""

    should_end_session = True
    return build_response(session_attributes, build_speechlet_response(
        card_title, speech_output, reprompt_text, should_end_session))
        
def houston_sub():

    session_attributes = {}
    card_title = "You've Voted For Houston"
    speech_output = "Thank you for your vote for Houston.  I've made a note of it. You can check the skill page Second Headquarters for updated results.  Thank you."
 
    # If the user either does not reply to the welcome message or says something
    # that is not understood, they will be prompted again with this text.
    reprompt_text = ""

    should_end_session = True
    return build_response(session_attributes, build_speechlet_response(
        card_title, speech_output, reprompt_text, should_end_session))
        
def indy_sub():

    session_attributes = {}
    card_title = "You've Voted For Indianapolis"
    speech_output = "Thank you for your vote for Indianapolis.  I've made a note of it. You can check the skill page Second Headquarters for updated results.  Thank you."
 
    # If the user either does not reply to the welcome message or says something
    # that is not understood, they will be prompted again with this text.
    reprompt_text = ""

    should_end_session = True
    return build_response(session_attributes, build_speechlet_response(
        card_title, speech_output, reprompt_text, should_end_session))
        
def kansascity_sub():

    session_attributes = {}
    card_title = "You've Voted For Kansas City"
    speech_output = "Thank you for your vote for Kansas City.  I've made a note of it. You can check the skill page Second Headquarters for updated results.  Thank you."
 
    # If the user either does not reply to the welcome message or says something
    # that is not understood, they will be prompted again with this text.
    reprompt_text = ""

    should_end_session = True
    return build_response(session_attributes, build_speechlet_response(
        card_title, speech_output, reprompt_text, should_end_session))
        
def losangeles_sub():

    session_attributes = {}
    card_title = "You've Voted For Los Angeles"
    speech_output = "Thank you for your vote for Los Angeles.  I've made a note of it. You can check the skill page Second Headquarters for updated results.  Thank you."
 
    # If the user either does not reply to the welcome message or says something
    # that is not understood, they will be prompted again with this text.
    reprompt_text = ""

    should_end_session = True
    return build_response(session_attributes, build_speechlet_response(
        card_title, speech_output, reprompt_text, should_end_session))
        
def mexicocity_sub():

    session_attributes = {}
    card_title = "You've Voted For Mexico City"
    speech_output = "Thank you for your vote for Mexico City.  I've made a note of it. You can check the skill page Second Headquarters for updated results.  Thank you."
 
    # If the user either does not reply to the welcome message or says something
    # that is not understood, they will be prompted again with this text.
    reprompt_text = ""

    should_end_session = True
    return build_response(session_attributes, build_speechlet_response(
        card_title, speech_output, reprompt_text, should_end_session))
        
def miami_sub():

    session_attributes = {}
    card_title = "You've Voted For Miami"
    speech_output = "Thank you for your vote for Miami.  I've made a note of it. You can check the skill page Second Headquarters for updated results.  Thank you."
 
    # If the user either does not reply to the welcome message or says something
    # that is not understood, they will be prompted again with this text.
    reprompt_text = ""

    should_end_session = True
    return build_response(session_attributes, build_speechlet_response(
        card_title, speech_output, reprompt_text, should_end_session))

def mnstpaul_sub():

    session_attributes = {}
    card_title = "You've Voted For Minneapolis St. Paul"
    speech_output = "Thank you for your vote for Minneapolis St. Paul.  I've made a note of it."
 
    # If the user either does not reply to the welcome message or says something
    # that is not understood, they will be prompted again with this text.
    reprompt_text = ""

    should_end_session = True
    return build_response(session_attributes, build_speechlet_response(
        card_title, speech_output, reprompt_text, should_end_session))

def montreal_sub():

    session_attributes = {}
    card_title = "You've Voted For Montreal"
    speech_output = "Thank you for your vote for Montreal.  I've made a note of it. You can check the skill page Second Headquarters for updated results.  Thank you."
 
    # If the user either does not reply to the welcome message or says something
    # that is not understood, they will be prompted again with this text.
    reprompt_text = ""

    should_end_session = True
    return build_response(session_attributes, build_speechlet_response(
        card_title, speech_output, reprompt_text, should_end_session))
        
def nashville_sub():

    session_attributes = {}
    card_title = "You've Voted For Nashville"
    speech_output = "Thank you for your vote for Nashville.  I've made a note of it. You can check the skill page Second Headquarters for updated results.  Thank you."
 
    # If the user either does not reply to the welcome message or says something
    # that is not understood, they will be prompted again with this text.
    reprompt_text = ""

    should_end_session = True
    return build_response(session_attributes, build_speechlet_response(
        card_title, speech_output, reprompt_text, should_end_session))

def neworleans_sub():

    session_attributes = {}
    card_title = "You've Voted For New Orleans"
    speech_output = "Thank you for your vote for New Orleans.  I've made a note of it. You can check the skill page Second Headquarters for updated results.  Thank you."
 
    # If the user either does not reply to the welcome message or says something
    # that is not understood, they will be prompted again with this text.
    reprompt_text = ""

    should_end_session = True
    return build_response(session_attributes, build_speechlet_response(
        card_title, speech_output, reprompt_text, should_end_session))

def newyork_sub():

    session_attributes = {}
    card_title = "You've Voted For New York City"
    speech_output = "Thank you for your vote for New York City.  I've made a note of it. You can check the skill page Second Headquarters for updated results.  Thank you."
 
    # If the user either does not reply to the welcome message or says something
    # that is not understood, they will be prompted again with this text.
    reprompt_text = ""

    should_end_session = True
    return build_response(session_attributes, build_speechlet_response(
        card_title, speech_output, reprompt_text, should_end_session))
        
def orlando_sub():

    session_attributes = {}
    card_title = "You've Voted For Orlando"
    speech_output = "Thank you for your vote for Orlando.  I've made a note of it. You can check the skill page Second Headquarters for updated results.  Thank you."
 
    # If the user either does not reply to the welcome message or says something
    # that is not understood, they will be prompted again with this text.
    reprompt_text = ""

    should_end_session = True
    return build_response(session_attributes, build_speechlet_response(
        card_title, speech_output, reprompt_text, should_end_session))

def ottawa_sub():

    session_attributes = {}
    card_title = "You've Voted For Ottawa"
    speech_output = "Thank you for your vote for Ottawa.  I've made a note of it. You can check the skill page Second Headquarters for updated results.  Thank you."
 
    # If the user either does not reply to the welcome message or says something
    # that is not understood, they will be prompted again with this text.
    reprompt_text = ""

    should_end_session = True
    return build_response(session_attributes, build_speechlet_response(
        card_title, speech_output, reprompt_text, should_end_session))
        
def philly_sub():

    session_attributes = {}
    card_title = "You've Voted For Philadelphia"
    speech_output = "Thank you for your vote for Philadelphia.  I've made a note of it. You can check the skill page Second Headquarters for updated results.  Thank you."
 
    # If the user either does not reply to the welcome message or says something
    # that is not understood, they will be prompted again with this text.
    reprompt_text = ""

    should_end_session = True
    return build_response(session_attributes, build_speechlet_response(
        card_title, speech_output, reprompt_text, should_end_session))

def phoenix_sub():

    session_attributes = {}
    card_title = "You've Voted For Phoenix"
    speech_output = "Thank you for your vote for Phoenix.  I've made a note of it. You can check the skill page Second Headquarters for updated results.  Thank you."
 
    # If the user either does not reply to the welcome message or says something
    # that is not understood, they will be prompted again with this text.
    reprompt_text = ""

    should_end_session = True
    return build_response(session_attributes, build_speechlet_response(
        card_title, speech_output, reprompt_text, should_end_session))

def portland_sub():

    session_attributes = {}
    card_title = "You've Voted For Portland"
    speech_output = "Thank you for your vote for Portland.  I've made a note of it. You can check the skill page Second Headquarters for updated results.  Thank you."
 
    # If the user either does not reply to the welcome message or says something
    # that is not understood, they will be prompted again with this text.
    reprompt_text = ""

    should_end_session = True
    return build_response(session_attributes, build_speechlet_response(
        card_title, speech_output, reprompt_text, should_end_session))
        
def raleigh_sub():

    session_attributes = {}
    card_title = "You've Voted For Raleigh Durham"
    speech_output = "Thank you for your vote for Raleigh Durham.  I've made a note of it. You can check the skill page Second Headquarters for updated results.  Thank you."
 
    # If the user either does not reply to the welcome message or says something
    # that is not understood, they will be prompted again with this text.
    reprompt_text = ""

    should_end_session = True
    return build_response(session_attributes, build_speechlet_response(
        card_title, speech_output, reprompt_text, should_end_session))
        
def sacramento_sub():

    session_attributes = {}
    card_title = "You've Voted For Sacramento"
    speech_output = "Thank you for your vote for Sacramento.  I've made a note of it. You can check the skill page Second Headquarters for updated results.  Thank you."
 
    # If the user either does not reply to the welcome message or says something
    # that is not understood, they will be prompted again with this text.
    reprompt_text = ""

    should_end_session = True
    return build_response(session_attributes, build_speechlet_response(
        card_title, speech_output, reprompt_text, should_end_session))

def seattle_sub():

    session_attributes = {}
    card_title = "You've Voted For Seattle"
    speech_output = "Thanks for your vote for Seattle.  I've made a note of it. You can check the skill page Second Headquarters for updated results.  Thank you."
 
    # If the user either does not reply to the welcome message or says something
    # that is not understood, they will be prompted again with this text.
    reprompt_text = ""

    should_end_session = True
    return build_response(session_attributes, build_speechlet_response(
        card_title, speech_output, reprompt_text, should_end_session))
        
def saltlakecity_sub():

    session_attributes = {}
    card_title = "You've Voted For Salt Lake City"
    speech_output = "Thanks for your vote for Salt Lake City.  I've made a note of it. You can check my skill page Second Headquarters for updated results.  Thank you."
 
    # If the user either does not reply to the welcome message or says something
    # that is not understood, they will be prompted again with this text.
    reprompt_text = ""

    should_end_session = True
    return build_response(session_attributes, build_speechlet_response(
        card_title, speech_output, reprompt_text, should_end_session))
        
def sanantonio_sub():

    session_attributes = {}
    card_title = "You've Voted For San Antonio"
    speech_output = "Thanks for your vote for San Antonio.  I've made a note of it. You can check my skill page Second Headquarters for updated results.  Thank you."
 
    # If the user either does not reply to the welcome message or says something
    # that is not understood, they will be prompted again with this text.
    reprompt_text = ""

    should_end_session = True
    return build_response(session_attributes, build_speechlet_response(
        card_title, speech_output, reprompt_text, should_end_session))
        
def sandiego_sub():

    session_attributes = {}
    card_title = "You've Voted For San Diego"
    speech_output = "Thanks for your vote for San Diego.  I've made a note of it. You can check my skill page Second Headquarters for updated results.  Thank you."
 
    # If the user either does not reply to the welcome message or says something
    # that is not understood, they will be prompted again with this text.
    reprompt_text = ""

    should_end_session = True
    return build_response(session_attributes, build_speechlet_response(
        card_title, speech_output, reprompt_text, should_end_session))
        
def sanfran_sub():

    session_attributes = {}
    card_title = "You've voted for San Francisco"
    speech_output = "Thank you for your vote for San Francisco.  I've made a note of it. You can check the skill page Second Headquarters for updated results.  Thank you."
 
    # If the user either does not reply to the welcome message or says something
    # that is not understood, they will be prompted again with this text.
    reprompt_text = ""

    should_end_session = True
    return build_response(session_attributes, build_speechlet_response(
        card_title, speech_output, reprompt_text, should_end_session))
        
def sanjose_sub():

    session_attributes = {}
    card_title = "You've voted for San Jose"
    speech_output = "Thank you for your vote for San Jose.  I've made a note of it. You can check the skill page Second Headquarters for updated results.  Thank you."
 
    # If the user either does not reply to the welcome message or says something
    # that is not understood, they will be prompted again with this text.
    reprompt_text = ""

    should_end_session = True
    return build_response(session_attributes, build_speechlet_response(
        card_title, speech_output, reprompt_text, should_end_session))
        
def oakland_sub():

    session_attributes = {}
    card_title = "You've voted for Oakland"
    speech_output = "Thank you for your vote for Oakland.  I've made a note of it. You can check the skill page Second Headquarters for updated results.  Thank you."
 
    # If the user either does not reply to the welcome message or says something
    # that is not understood, they will be prompted again with this text.
    reprompt_text = ""

    should_end_session = True
    return build_response(session_attributes, build_speechlet_response(
        card_title, speech_output, reprompt_text, should_end_session))
        
def saintlouis_sub():

    session_attributes = {}
    card_title = "You've voted for St. Louis"
    speech_output = "Thank you for your vote for St. Louis.  I've made a note of it. You can check the skill page Second Headquarters for updated results.  Thank you."
 
    # If the user either does not reply to the welcome message or says something
    # that is not understood, they will be prompted again with this text.
    reprompt_text = ""

    should_end_session = True
    return build_response(session_attributes, build_speechlet_response(
        card_title, speech_output, reprompt_text, should_end_session))
        
def tampa_sub():

    session_attributes = {}
    card_title = "You've voted for Tampa"
    speech_output = "Thank you for your vote for Tampa.  I've made a note of it. You can check the skill page Second Headquarters for updated results.  Thank you."
 
    # If the user either does not reply to the welcome message or says something
    # that is not understood, they will be prompted again with this text.
    reprompt_text = ""

    should_end_session = True
    return build_response(session_attributes, build_speechlet_response(
        card_title, speech_output, reprompt_text, should_end_session))

def toronto_sub():

    session_attributes = {}
    card_title = "You've voted for Toronto"
    speech_output = "Thank you for your vote for Toronto.  I've made a note of it. You can check the skill page Second Headquarters for updated results.  Thank you."
 
    # If the user either does not reply to the welcome message or says something
    # that is not understood, they will be prompted again with this text.
    reprompt_text = ""

    should_end_session = True
    return build_response(session_attributes, build_speechlet_response(
        card_title, speech_output, reprompt_text, should_end_session))

def washingtondc_sub():

    session_attributes = {}
    card_title = "You've voted for Washington D.C."
    speech_output = "Thank you for your vote for Washington D.C..  I've made a note of it. You can check the skill page Second Headquarters for updated results.  Thank you."
 
    # If the user either does not reply to the welcome message or says something
    # that is not understood, they will be prompted again with this text.
    reprompt_text = ""

    should_end_session = True
    return build_response(session_attributes, build_speechlet_response(
        card_title, speech_output, reprompt_text, should_end_session))

def lasvegas_sub():

    session_attributes = {}
    card_title = "You've Voted for Las Vegas"
    speech_output = "Thank you for your vote for Las Vegas.  I've made a note of it. You can check the skill page Second Headquarters for updated results.  Thank you."
 
    # If the user either does not reply to the welcome message or says something
    # that is not understood, they will be prompted again with this text.
    reprompt_text = ""

    should_end_session = True
    return build_response(session_attributes, build_speechlet_response(
        card_title, speech_output, reprompt_text, should_end_session))
        
def baking_powder_sub():

    session_attributes = {}
    card_title = "BrownSugar"
    speech_output = "For one teaspoon baking powder, combine one-quarter teaspoon baking soda, plus one half teaspoon cream of tartar.  Would you like another sub?"
 
    # If the user either does not reply to the welcome message or says something
    # that is not understood, they will be prompted again with this text.
    reprompt_text = "You can tell me what ingredient you'd like to sub. "

    should_end_session = False
    return build_response(session_attributes, build_speechlet_response(
        card_title, speech_output, reprompt_text, should_end_session))

def half_and_half_sub():

    session_attributes = {}
    card_title = "HalfandHalf"
    speech_output = "For one cup half and half, substitute with one tablespoon melted butter, plus enough whole milk to make one cup.  Would you like another sub?"
 
    # If the user either does not reply to the welcome message or says something
    # that is not understood, they will be prompted again with this text.
    reprompt_text = "You can tell me what ingredient you'd like to sub. "

    should_end_session = False
    return build_response(session_attributes, build_speechlet_response(
        card_title, speech_output, reprompt_text, should_end_session))

def molasses_sub():

    session_attributes = {}
    card_title = "MoleassesSub"
    speech_output = "Molasses has a distinct flavor, but if you need to substitute it try replacing with honey, dark corn syrup, or maple syrup.  Would you like another sub?"
 
    # If the user either does not reply to the welcome message or says something
    # that is not understood, they will be prompted again with this text.
    reprompt_text = "You can tell me what ingredient you'd like to sub. "

    should_end_session = False
    return build_response(session_attributes, build_speechlet_response(
        card_title, speech_output, reprompt_text, should_end_session))
        
def un_choc_sub():

    session_attributes = {}
    card_title = "UnChocSub"
    speech_output = "For one ounce unsweented chocolate, substitute with three tablespoons unsweetend cocoa powder, with one tablespoon melted shortening, butter, or oil.  Would you like another sub?"
 
    # If the user either does not reply to the welcome message or says something
    # that is not understood, they will be prompted again with this text.
    reprompt_text = "You can tell me what ingredient you'd like to sub. "

    should_end_session = False
    return build_response(session_attributes, build_speechlet_response(
        card_title, speech_output, reprompt_text, should_end_session))
        
def ricotta_sub():

    session_attributes = {}
    card_title = "RicottaSub"
    speech_output = "A good substitute for ricotta cheese is cottage cheese.  Would you like another sub?"
 
    # If the user either does not reply to the welcome message or says something
    # that is not understood, they will be prompted again with this text.
    reprompt_text = "You can tell me what ingredient you'd like to sub. "

    should_end_session = False
    return build_response(session_attributes, build_speechlet_response(
        card_title, speech_output, reprompt_text, should_end_session))
        
def heavy_cream_sub():

    session_attributes = {}
    card_title = "HeavyCreamSub"
    speech_output = "For one cup heavy cream, substitute with three quarter cups milk, plus three tablespoons melted butter. Would you like another sub?"
 
    # If the user either does not reply to the welcome message or says something
    # that is not understood, they will be prompted again with this text.
    reprompt_text = "You can tell me what ingredient you'd like to sub. "

    should_end_session = False
    return build_response(session_attributes, build_speechlet_response(
        card_title, speech_output, reprompt_text, should_end_session))

def self_rising_sub():

    session_attributes = {}
    card_title = "SelfRisingSub"
    speech_output = "For one cup self rising flour, substitute with one cup all purpose flour, plus one and a half teaspoons baking powder, and one quarter teaspoon salt. Would you like another sub?"
 
    # If the user either does not reply to the welcome message or says something
    # that is not understood, they will be prompted again with this text.
    reprompt_text = "You can tell me what ingredient you'd like to sub. "

    should_end_session = False
    return build_response(session_attributes, build_speechlet_response(
        card_title, speech_output, reprompt_text, should_end_session))
        
def oil_sub():

    session_attributes = {}
    card_title = "OilSub"
    speech_output = "For cooking oils in baked goods, a good substitute is an equal amount of melted butter, or mayonaise, or coconut oil.  You can also try fruit puree like applesauce but add half the called amount.  Would you like another sub?"
 
    # If the user either does not reply to the welcome message or says something
    # that is not understood, they will be prompted again with this text.
    reprompt_text = "You can tell me what ingredient you'd like to sub. "

    should_end_session = False
    return build_response(session_attributes, build_speechlet_response(
        card_title, speech_output, reprompt_text, should_end_session))

def food_sub():

    session_attributes = {}
    card_title = "FoodSub"
    speech_output = "You can specify the specific ingredient you'd like to sub for."
 
    # If the user either does not reply to the welcome message or says something
    # that is not understood, they will be prompted again with this text.
    reprompt_text = "You can tell me what ingredient you'd like to sub. "

    should_end_session = False
    return build_response(session_attributes, build_speechlet_response(
        card_title, speech_output, reprompt_text, should_end_session))

def drink_sub():

    session_attributes = {}
    card_title = "SelfRisingSub"
    speech_output = "I don't currently cover drink substitutions, but I'm learning.  You can leave a comment on my skill page if you'd like us to add a substitution.  Would you like another sub?"
 
    # If the user either does not reply to the welcome message or says something
    # that is not understood, they will be prompted again with this text.
    reprompt_text = ""

    should_end_session = False
    return build_response(session_attributes, build_speechlet_response(
        card_title, speech_output, reprompt_text, should_end_session))
        
def not_found():

    session_attributes = {}
    card_title = "City not Found"
    speech_output = "Sorry, I don't seem to know that city.  Most cities that qualify are large cities.  You can check the second headquarters skill page for a list of cities."
 
    # If the user either does not reply to the welcome message or says something
    # that is not understood, they will be prompted again with this text.
    reprompt_text = "Just say the name of a qualified city."

    should_end_session = False
    return build_response(session_attributes, build_speechlet_response(
        card_title, speech_output, reprompt_text, should_end_session))
# --------------- Events ------------------

def on_session_started(session_started_request, session):
    """ Called when the session starts """

    print("on_session_started requestId=" + session_started_request['requestId']
          + ", sessionId=" + session['sessionId'])


def on_launch(launch_request, session):
    """ Called when the user launches the skill without specifying what they
    want
    """

    print("on_launch requestId=" + launch_request['requestId'] +
          ", sessionId=" + session['sessionId'])
    # Dispatch to your skill's launch
    return get_welcome_response()


def on_intent(intent_request, session):
    """ Called when the user specifies an intent for this skill """

    print("on_intent requestId=" + intent_request['requestId'] +
          ", sessionId=" + session['sessionId'])

    intent = intent_request['intent']
    intent_name = intent_request['intent']['name']

    # Dispatch to your skill's intent handlers

    if intent_name == "WhatsMyColorIntent":
        return get_color_from_session(intent, session)
    elif intent_name == "NotFoundIntent":
        return not_found()
    elif intent_name == "AtlantaIntent":
        return atlanta_sub()
    elif intent_name == "AustinIntent":
        return austin_sub()
    elif intent_name == "BaltimoreIntent":
        return baltimore_sub()
    elif intent_name == "BirminghamIntent":
        return birmingham_sub()
    elif intent_name == "BostonIntent":
        return boston_sub()
    elif intent_name == "BuffaloIntent":
        return buffalo_sub()
    elif intent_name == "CharlotteIntent":
        return charlotte_sub()
    elif intent_name == "ChicagoIntent":
        return chicago_sub()
    elif intent_name == "CincinnatiIntent":
        return cincinnati_sub()
    elif intent_name == "ClevelandIntent":
        return cleveland_sub()
    elif intent_name == "DallasIntent":
        return dallas_sub()
    elif intent_name == "DenverIntent":
        return denver_sub()
    elif intent_name == "DetroitIntent":
        return detroit_sub()
    elif intent_name == "HoustonIntent":
        return houston_sub()
    elif intent_name == "IndianapolisIntent":
        return indy_sub()
    elif intent_name == "KansasCityIntent":
        return kansascity_sub()
    elif intent_name == "LosAngelesIntent":
        return losangeles_sub()
    elif intent_name == "MexicoCityIntent":
        return mexicocity_sub()
    elif intent_name == "MiamiIntent":
        return miami_sub()
    elif intent_name == "MinneapolisIntent":
        return mnstpaul_sub()
    elif intent_name == "MontrealIntent":
        return montreal_sub()
    elif intent_name == "NashvilleIntent":
        return nashville_sub()
    elif intent_name == "NewOrleansIntent":
        return neworleans_sub()
    elif intent_name == "NewYorkIntent":
        return newyork_sub()
    elif intent_name == "OaklandIntent":
        return oakland_sub()
    elif intent_name == "OrlandoIntent":
        return orlando_sub()
    elif intent_name == "OttawaIntent":
        return ottawa_sub()
    elif intent_name == "PhiladelphiaIntent":
        return philly_sub()
    elif intent_name == "PhoenixIntent":
        return phoenix_sub()
    elif intent_name == "PortlandIntent":
        return portland_sub()
    elif intent_name == "RaleighIntent":
        return raleigh_sub()
    elif intent_name == "SacramentoIntent":
        return sacramento_sub()
    elif intent_name == "SaltLakeCityIntent":
        return saltlakecity_sub()
    elif intent_name == "SanAntonioIntent":
        return sanantonio_sub()
    elif intent_name == "SanDiegoIntent":
        return sandiego_sub()
    elif intent_name == "SeattleIntent":
        return seattle_sub()
    elif intent_name == "SanFranciscoIntent":
        return sanfran_sub()
    elif intent_name == "SanJoseIntent":
        return sanjose_sub()
    elif intent_name == "StLouisIntent":
        return saintlouis_sub()
    elif intent_name == "TampaIntent":
        return tampa_sub()
    elif intent_name == "TorontoIntent":
        return toronto_sub()
    elif intent_name == "WashingtonDCIntent":
        return washingtondc_sub()
    elif intent_name == "LasVegasIntent":
        return lasvegas_sub()
    elif intent_name == "ContinueIntent":
        return keep_going()
    elif intent_name == "AMAZON.HelpIntent":
        return help_reponse()
    elif intent_name == "AMAZON.CancelIntent" or intent_name == "AMAZON.StopIntent":
        return handle_session_end_request()
    else:
        return not_found()


def on_session_ended(session_ended_request, session):
    """ Called when the user ends the session.

    Is not called when the skill returns should_end_session=true
    """
    print("on_session_ended requestId=" + session_ended_request['requestId'] +
          ", sessionId=" + session['sessionId'])
    # add cleanup logic here


# --------------- Main handler ------------------

def lambda_handler(event, context):
    """ Route the incoming request based on type (LaunchRequest, IntentRequest,
    etc.) The JSON body of the request is provided in the event parameter.
    """
    print("event.session.application.applicationId=" +
          event['session']['application']['applicationId'])

    """
    Uncomment this if statement and populate with your skill's application ID to
    prevent someone else from configuring a skill that sends requests to this
    function.
    """
    # if (event['session']['application']['applicationId'] !=
    #         "amzn1.echo-sdk-ams.app.[unique-value-here]"):
    #     raise ValueError("Invalid Application ID")

    if event['session']['new']:
        on_session_started({'requestId': event['request']['requestId']},
                           event['session'])

    if event['request']['type'] == "LaunchRequest":
        return on_launch(event['request'], event['session'])
    elif event['request']['type'] == "IntentRequest":
        return on_intent(event['request'], event['session'])
    elif event['request']['type'] == "SessionEndedRequest":
        return on_session_ended(event['request'], event['session'])
