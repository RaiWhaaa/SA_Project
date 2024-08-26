package entity

import (
	"time"

	"gorm.io/gorm"
)

type Payment struct {
	gorm.Model
	PaymentDate	   	time.Time
	PaymentMethod	string
	Amount			float32
	Slip          	[]byte

	CustomerID		uint
	Customer		Customer	`gorm:"foreignKey:CustomerID"`

	OrderID			uint
	Order			Order		`gorm:"foreignKey:OrderID"`
}