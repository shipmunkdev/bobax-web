import os
import json
from starlette_graphene3 import GraphQLApp, make_graphiql_handler
from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from BobaList.query import schemaBoba
from MilkList.query import schemaMilk
from ToppingsList.query import schemaToppings
app = FastAPI()

# this is to allow CORS so that you can connect backend and frontend locally
load_dotenv()
allow_cors = os.getenv("ALLOW_CORS", "").split(",")
origins = [origin.strip() for origin in allow_cors]

app.add_middleware(
  CORSMiddleware,
  allow_origins=origins,
  allow_credentials=True,
  allow_methods=["*"],
  allow_headers=["*"],
)

app.mount("/boba_list", GraphQLApp(schema=schemaBoba, on_get=make_graphiql_handler())) 
app.mount("/milk_list", GraphQLApp(schema=schemaMilk, on_get=make_graphiql_handler())) 
app.mount("/toppings_list", GraphQLApp(schema=schemaToppings, on_get=make_graphiql_handler())) 
