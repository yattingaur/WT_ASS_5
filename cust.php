<?php
class customer{
    public $user;
    public $pass;
    public $mobileNumber;
    public $emails;
    public $strUser1;

    
    private $conn;

    public function __construct($conn)
    {
        $this->conn=$conn;
        
    }
    public function insertcustomerdetail($obj){
        $sql="INSERT INTO eventer (user,pass,mobileNumber,emails,strUser1) VALUES('$obj->user','$obj->pass','$obj->mobileNumber','$obj->emails','$obj->strUser1');";
            $result=mysqli_query($this->conn,$sql);
            if($result==TRUE)
            {
                $msg=["Form successfully submitted"];
            }
            else
            {
                $msg=["Error occurred while submitting information. Please try again later."];
            }
            
            return json_encode($msg);
    }
    public function getcutomerdetails(){
        $sql="SELECT * FROM eventer;";
        $result=mysqli_query($this->conn,$sql);
        $arr=array();
        if(mysqli_num_rows($result)>0)
        {
            while($row=mysqli_fetch_assoc($result))
            {
                $arr[]=$row;
            }
        }
        return json_encode($arr);      
    }

}
?>