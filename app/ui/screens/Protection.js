import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import InputBox from '../components/InputBox';
import Card from '../components/Card';
import PharmacyCard from '../components/PharmacyCard';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F8F8FC',
  },
  headTitle: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  inputBox: {
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  requirementText: {
    fontSize: 20,
    fontWeight: '600',
  },
  moreText: {
    color: '#a3a3a3',
  },
  mt(number) {
    return {
      marginTop: number,
    };
  },
});

const Protection = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headTitle}>Find, Buy,</Text>
      <Text style={styles.headTitle}>& Protect your family!</Text>
      <InputBox style={styles.inputBox} />
      <View style={styles.mt(20)}>
        <View style={styles.row}>
          <Text style={styles.requirementText}>Requirements</Text>
          <TouchableOpacity>
            <Text style={styles.moreText}>more &#10095;</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          style={styles.mt(20)}
          horizontal
          showsHorizontalScrollIndicator={false}>
          <Card
            color="#FACB3C"
            name="Mask"
            icon={require('../../assets/images/heart.png')}
          />
          <Card
            color="#5375F0"
            name="Alcohol"
            icon={require('../../assets/images/spray.png')}
          />
          <Card
            color="#FA7341"
            name="Gloves"
            icon={require('../../assets/images/gloves.png')}
          />
        </ScrollView>
        <View style={styles.mt(20)}>
          <View style={styles.row}>
            <Text style={styles.requirementText}>Nearest Pharmacies</Text>
            <TouchableOpacity>
              <Text style={styles.moreText}>map &#10095;</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.mt(20)}>
          <PharmacyCard
            image="https://healthprofessions.missouri.edu/wp-content/uploads/2016/07/medical-lab-science-home-3-300x169.jpg"
            name="CVS Pharmacy"
            address="10204 Flatlands Ave."
          />
          <PharmacyCard
            image="https://news.mayocliniclabs.com/n1/96e99366cea7b0de/uploads/2016/11/MLS-program_960x540.jpg"
            name="Rite Aid Pharmacy"
            address="1631-43 Pitkin Ave."
          />
          <PharmacyCard
            style={{marginBottom: 30}}
            image="https://www.clubstaffing.com/uploadedImages/ClubStaffing-New/Content/Resources/articles/Clinical%20Laboratory%20Scientist%20Jobs%20in%20CA.jpg"
            name="Nice Pharmacy"
            address="10923 Laxman Ave."
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Protection;
