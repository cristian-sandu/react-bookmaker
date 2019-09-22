import React from 'react'
import { Th as TableHead, Tr as TableRow } from 'react-super-responsive-table'

const FeedHeader = () => (
  <TableRow>
    <TableHead>NAME</TableHead>
    <TableHead>STANDORT</TableHead>
    <TableHead>ÖFFNUNGSZEITEN</TableHead>
    <TableHead>BEWERTUNGEN</TableHead>
    <TableHead>PUNKTZAHL</TableHead>
    <TableHead>WETTE&nbsp;JETZT</TableHead>
  </TableRow>
)

export default FeedHeader
