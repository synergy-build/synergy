import React, { useRef, useState } from 'react';
import { Animated, FlatList, StyleSheet, View } from 'react-native';
import OnboardingItem from './onboardingItem';
import slides from './onboardingSlides';

const Onboarding = () => {
    const scrollX = useRef(new Animated.Value(0)).current;
    const [currentIndex, setCurrentIndex] = useState(0);
    const slidesRef = useRef(null);

    const viewableItemsChanged = useRef(({ viewableItems }:{viewableItems : any}) => {
        setCurrentIndex(viewableItems[0].index);
    }).current;

    const viewConfig = useRef({ viewAreaCoveragePercentThreshold : 50}).current;

    return (
        <View style={styles.container}>
            <View style={{flex: 3}}>
                <FlatList 
                    data={slides} 
                    renderItem={({item}) => <OnboardingItem item={item} />}
                    horizontal
                    pagingEnabled
                    bounces={false}
                    keyExtractor={(item) => item.id}
                    onScroll={Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}], {useNativeDriver: false,})}
                    scrollEventThrottle={32}
                    onViewableItemsChanged={viewableItemsChanged}
                    viewabilityConfig={viewConfig}
                    ref={slidesRef}
                />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Onboarding;