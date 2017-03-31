<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">


<xsl:template match="/">
<html>
<head>

<style rel="stylesheet" type="text/css">
table{width:100%;border:1px solid;border-radius:10px 10px 10px 10px;}
th{background-color:#8FC0A9}
td,tr,th{border:1px solid;padding:2px;vertical-align:top; border-radius:12px 12px 12px 12px; }
td{background-color:#E4F5D2; text-align: center;}
span{color:green; padding-left:5px}
#x{color:red}
</style>


</head>
 <body>
  <h2>Questions</h2>
  <table border="1">
   <tr bgcolor="#cdd8f6">
    <th>Title</th>
    <th>Option</th>
    <th>Answer</th>
   </tr>
   <xsl:for-each select="questions/question">
   <tr>
    <td><xsl:value-of select="title"/></td>
   <td>
    <xsl:for-each select="option">
     <xsl:value-of select="position()"/>: <xsl:value-of select="text()"/><br/>
    </xsl:for-each>
   </td>
   <td>
    <xsl:for-each select="answer">
     <xsl:value-of select="text()"/><br/>
    </xsl:for-each> 
   </td>
   </tr>
   </xsl:for-each>
  </table>
 </body>
</html>
</xsl:template>

</xsl:stylesheet>