import React from 'react'
import Card from './Card';
import Candidate from './Candidate';

export default function Candidates({candidates}) {
  return (
    <div>
         {candidates.map(candidate => {
           const {id} = candidate;

          return (
            <Card key={id}>
              <Candidate candidate={candidate}/>
            </Card>
          );
        })}      
    </div>
  )
}
